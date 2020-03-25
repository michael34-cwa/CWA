<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', 'Auth\RegisterController@register')->name('auth.register');
Route::post('login', 'Auth\LoginController@login')->name('auth.login');
Route::post('reset_password', 'Auth\ResetPasswordController@resetPassword');
Route::group(['middleware' => 'auth.api:api'], function() {
Route::delete('/logout', 'Auth\LoginController@logout')->name('auth.logout');
 Route::get('/user', 'Auth\LoginController@getUser');
//  Route::get('/user', function (Request $request) { 
//      return response()->json(['user'=>\Auth::guard('api')->user(),'roles'=>'Sorry, this password is incorrect. Plesae try again.']);
//     });
});