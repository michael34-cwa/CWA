<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\User;

class UserController extends Controller
{

  

    public function update(UserRequest $request, $id)
    {
 
      if ($request->old_password == '' && $request->password != '') {
            return response()->json(['message'=>'Please enter old password.','status'=>1], 422);
        }

        if ($request->password == '' && $request->old_password != '') {
            return response()->json(['message' => 'Please enter password.', 'status' => 1], 422);
        }

 
        if ($request->password != '' && $request->old_password != '') {
        $hasher = \Sentinel::getHasher();
        $oldPassword = $request->old_password;
        $password = $request->password; 
        $user = \Sentinel::findUserById($id);  
  
        if (!$hasher->check($oldPassword, $user->password)) {
            return response()->json(['message' => 'Please enter valid old password.', 'status' => 1], 422);
        }
        \Sentinel::update($user, array('password' => $password));

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
}
