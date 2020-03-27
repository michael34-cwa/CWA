<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api'], function() {
    Route::match(['put', 'patch'], '/{id}', 'UserController@update')->name('users.update');
    Route::patch('/project/{id}', 'UserController@projectUpdate');
    Route::patch('/student/{id}', 'UserController@studentUpdate');
    Route::patch('/school/{id}/{sid}', 'UserController@schoolUpdate');
});     