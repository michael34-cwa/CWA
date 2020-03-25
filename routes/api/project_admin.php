<?php

use Illuminate\Support\Facades\Route;



Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/students', 'ProjectAdminController@studentList');
    Route::post('/{id?}', 'ProjectAdminController@store')->name('course_assign.store');
    Route::get('/', 'ProjectAdminController@index')->name('course_assign.index');
    Route::get('/{id}', 'ProjectAdminController@show')->name('course_assign.show');
    Route::match(['put', 'patch'], '/{id}/{status?}', 'ProjectAdminController@update')->name('course_assign.update');
    Route::delete('/{id}', 'ProjectAdminController@delete')->name('course_assign.delete');

});