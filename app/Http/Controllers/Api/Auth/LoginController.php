<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Activation;
use App\Model\User;
use App\Model\SchoolList;
use App\Model\SchoolProfile;
use App\Model\StudentCourses;
use Cartalyst\Sentinel\Sentinel;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Cartalyst\Sentinel\Users\UserInterface;
class LoginController extends Controller
{
    public function login(Request $request)
    {
        $input = $this->validate($request, [
            'email' => 'required|email|exists:users,email',
            'password' => 'required|min:6',
        ], [
            'email.exists' => 'Please enter a valid email address.',
        ]);
                      
        //Check user activation 
          $userData =  \App\User::GetUserByMail($input['email']);   

       $role =  \Sentinel::findById($userData->id)->roles[0];

        if($role->slug == 'admin' && $request->loginType !== '/admin/login'){ 
         return response()->json(['message'=>'Please enter a valid email address.'],401);
        }

        if ($role->slug != 'admin' && $request->loginType == '/admin/login') {
            return response()->json(['message' => 'Please enter a valid email address.'], 401);
        }
  
           $user = \Sentinel::findById($userData->id);   
           $activation =   Activation::completed($user); 
         
           if (empty($activation) && $activation == '') {
            return response()->json(['message'=>'The account is not activated yet.'], 401);
           }

//Check authenticate user
            $authenticate_user = \Sentinel::authenticate($request->all());
            if (empty($authenticate_user) && $authenticate_user == '') {
                 return response()->json(['message'=>'Sorry, this password is incorrect. Plesae try again.'],401);
            }   

        request()->request->add([
            'grant_type' => 'password',
           'client_id' => env('PASSWORD_CLIENT_ID','2'),
            'client_secret' => env('PASSWORD_CLIENT_SECRET','NRtO84wfjk8TDSRKMpOdtbl2buDjL18skrrNbSPt'),
            'username' => $input['email'],
            'password' => $input['password'],
        ]);
   
        $response = Route::dispatch(Request::create('/oauth/token', 'POST')); 

        $data = json_decode($response->getContent(), true);  
          
 
     
        if (!$response->isOk()) {
            return response()->json($data, 401);
        }

        $data = response()->json(['data' => $data, 'role' => $role->slug]);


        return $data;
    }

    public function logout(Request $request)
    {
       
        // $accessToken = $request->user()->token(); 
        // DB::table('oauth_refresh_tokens')
        //     ->where('access_token_id', $accessToken->id)
        //     ->update([
        //         'revoked' => true,
        //     ]);

        // $accessToken->revoke();

        return response()->json([], 201);
    }

         public function getUser(Request $request)
    {

        $user = \Auth::guard('api')->user();
        
    
          $role =  \Sentinel::findById($user->id)->roles[0]; 
        $roleName = $role->slug; 
        if($roleName === 'school'){
        $schollist =   SchoolList::where('school_id',$user->id)->first();
        
        if(empty($schollist)){
            $scholpro =   SchoolProfile::where('school_id',$user->id)->first();
      
            $schoolList =  SchoolList::where('school_id',$scholpro->school_admin_id)->first();  
        }else{ 
            $schoolList =  SchoolList::where('school_id',$user->id)->first(); 
        }
        $user['schoolist'] =$schoolList;
        }

 
         $user['rolename'] = $roleName; 


     return response()->json($user);
    }
}
