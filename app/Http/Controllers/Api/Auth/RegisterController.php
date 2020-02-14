<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Cartalyst\Sentinel\Users\UserInterface; 


class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6'
        ], [
            'password.confirmed' => 'The password does not match.'
        ]);

        try {
            event(new Registered($this->create($request->all())));

            $http = new Client;

            $response = $http->post(env('APP_URL') . '/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => env('PASSWORD_CLIENT_ID'),
                    'client_secret' => env('PASSWORD_CLIENT_SECRET'),
                    'username' => $request->get('email'),
                    'password' => $request->get('password'),
                    'remember' => false,
                    'scope' => '',
                ],
            ]);
   
             //Get and check user data by email
            $userData = User::GetUserByMail($data['email']);

            //Check Email Exit
            if (!empty($userData)) {
                Session::flash('error', Config::get('message.options.REGISTERD_MAIL'));
                return Redirect::back();
            }

            $userData = User::GetUserByMail($data['email']);
            ////Check Email Exit
            if (!empty($userData)) {
                $user = Sentinel::findById($userData->id);
                if (!$activation = Activation::completed($user)) {
                    Session::flash('error', USER_NOT_ACTIVATE);
                    return Redirect::back();
                }
            }


            $credential = [
                'email' => $data['email'],
                'password' => $data['password'],
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
            ];
            //Vendor register

            $user = \Sentinel::registerAndActivate($credential);

            if (!empty($user)) {
                $role = \Sentinel::findRoleByName($data["type"]);
                $role->users()->attach($user);
                if ($data["type"] == 'tutor') {
                    $type = new \App\Model\TutorProfile;
                    $type->uuid = mt_rand();
                    $type->user_id = $user->id;
                    $type->save();
                } else {
                    $type = new \App\Model\EmployerProfile;
                    $type->user_id = $user->id;
                    $type->save();
                    $subs = New Subscription;
                    $subs->plan_id = decrypt($data['planId']);
                    $subs->user_id = $user->id;
                    $subs->save();
                   return Redirect::to('subscription/'.encrypt($user->id));
                }
            }
            return json_decode((string)$response->getBody(), true);
        } catch (\Exception $e) {
            dd($e->getMessage(), $e->getCode(), $e->getTrace());
            return response()->json([
                "error" => "invalid_credentials",
                "message" => "The user credentials were incorrect."
            ], 401);
        }
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }
}
