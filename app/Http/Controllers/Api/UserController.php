<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\User;
use App\Model\SchoolList;
class UserController extends Controller
{

  

    public function update(UserRequest $request, $id)
    {
      $id = base64_decode(urldecode($id));

        $data = $this->profileCheck($request, $id);
    
        if( $data != ''){
          return response()->json(['message'=>$data,'status'=>1], 422);
        }

        $user = User::findOrFail($id);
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->phone = $request->phone;
        $user->save();


        return response()->json([
            'user' => $user
        ], 201);
    }

  

    public function projectUpdate(UserRequest $request, $id)
    {
      $id = base64_decode(urldecode($id));

      $data = $this->profileCheck($request, $id);
    
      if( $data != ''){
        return response()->json(['message'=>$data,'status'=>1], 422);
      }
     

        $user = User::findOrFail($id);
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->phone = $request->phone;
        $user->save();


        return response()->json([
            'user' => $user
        ], 201);
    }


    public function studentUpdate(UserRequest $request, $id)
    {
      $id = base64_decode(urldecode($id));

      $data = $this->profileCheck($request, $id);
    
      if( $data != ''){
        return response()->json(['message'=>$data,'status'=>1], 422);
      }
     

        $user = User::findOrFail($id);
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->phone = $request->phone;
        $user->save();


        return response()->json([
            'user' => $user
        ], 201);
    }



    public function schoolUpdate(UserRequest $request, $id, $sid)
    {
      $id = base64_decode(urldecode($id));

      $data = $this->profileCheck($request, $id);
    
      if( $data != ''){
        return response()->json(['message'=>$data,'status'=>1], 422);
      } 
        $user = User::findOrFail($id);
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->phone = $request->phone;
        $user->save();

        $schoolList = SchoolList::findOrFail($sid);
        $schoolList->school_name = $request->school_name;
        $schoolList->school_address = $request->school_address;
        $schoolList->school_description = $request->school_description;
        $schoolList->save();
        $user['schoolist'] =$schoolList;
        return response()->json([
            'user' => $user
        ], 201);
    }

    
    public function teacherUpdate(UserRequest $request, $id)
    {
      $id = base64_decode(urldecode($id));

      $data = $this->profileCheck($request, $id);
    
      if( $data != ''){
        return response()->json(['message'=>$data,'status'=>1], 422);
      }
     

        $user = User::findOrFail($id);
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->phone = $request->phone;
        $user->save();


        return response()->json([
            'user' => $user
        ], 201);
    }

private function profileCheck($request, $id){

 
    if ($request->old_password == '' && $request->password != '') {
       return 'Please enter old password.';
    }

    if ($request->password == '' && $request->old_password != '') {
        return  'Please enter password.';
    }


    if ($request->password != '' && $request->old_password != '') {
    $hasher = \Sentinel::getHasher();
    $oldPassword = $request->old_password;
    $password = $request->password; 
    $user = \Sentinel::findUserById($id);  

    if (!$hasher->check($oldPassword, $user->password)) {
        return  'Please enter valid old password.';
    }
    \Sentinel::update($user, array('password' => $password));
   
  
}

}
}
