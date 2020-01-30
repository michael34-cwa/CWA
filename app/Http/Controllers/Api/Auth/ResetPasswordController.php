<?php

namespace App\Http\Controllers\Api\Auth;

 
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Activation;
use Cartalyst\Sentinel\Sentinel;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Exception;
use Cartalyst\Sentinel\Users\UserInterface;
use App\User;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Cartalyst\Sentinel\Laravel\Facades\Reminder;
use App\Http\Requests\ValidationRequest;
use Illuminate\Support\Facades\Validator;
use View;
 class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

 

    public function resetPassword(Request $request)
    {
      try {
            $data = $request->json()->all(); 
            $validation = \Validator::make($data, ValidationRequest::$forgot_email);
            if ($validation->fails()) {
                $errors = $validation->messages();
               return response()->json(['status'=>0,'message'=>$errors]);
            }
            //Get and check user data by email
            $userData = User::GetUserByMail($data['email']);

//Check Email Exit
            if (empty($userData) && $userData == '') {

                     return response()->json([
                "error" => "invalid_credentials",
                "message" => "The user email were incorrect."
            ], 401);
          //  return response()->json(['status'=>0,'message'=>'User email not valid']); 
            }
//Check User Activation
            $user = \Sentinel::findById($userData->id);
            $activation = \Activation::exists($user);

            if (!empty($activation) && $activation != '') {
        
           
          return response()->json([
                "error" => "invalid_credentials",
                "message" => "User not activeted."
            ], 401);
            }
            $user_sentinal = \Sentinel::findById($userData->id);
 
            //get code
            $reminder =  \Reminder::create($user);
        
            $first_name = $userData->first_name;
            if (isset($userData->last_name)) {
                $last_name = $userData->last_name;
            }
            $mail = $userData->email;

            $baseUrl = \URL::to('/');
            $reminder = $reminder->code;
            $baseUrl = $baseUrl . '/password/reset/' . $reminder;
          
            //$VendorTem = \App\Model\EmailTemplate::where('slug', 'forgot_password')->first();
        //    $mailData = str_replace("{first_name}", $first_name, $VendorTem->body);
         //   $mailData = str_replace("{last_name}", $last_name, $mailData);
           $mailData = $first_name;
            $content = str_replace("{button}", '  <a href="' . $baseUrl . '" type="button" class="btn btn-primary">Click Here</a>', $mailData);

          //  Mail::to('gurinder@yopmail.com')->send(new \App\Mail\ForgetMail($content));
                // Mail::raw('Hi, welcome user!', function ($message) {
                // $message->to('gurinder@yopmail.com') ->subject('Forget Email');
                // });
 
          return response()->json( 'Link has been sent',200); 

        } catch (Exception $ex) {
                  return response()->json(['status'=>0,'message'=>$ex->getMessage()]);  
        }
    }


 
}