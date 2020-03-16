<?php

use Illuminate\Support\Facades\Route;

 

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/{id?}', 'CourseAssignController@store')->name('course_assign.store');
    Route::get('/', 'CourseAssignController@index')->name('course_assign.index');
    Route::get('/{id}', 'CourseAssignController@show')->name('course_assign.show');
    Route::match(['put', 'patch'], '/{id}/{status?}', 'CourseAssignController@update')->name('course_assign.update');
    Route::delete('/{id}', 'CourseAssignController@delete')->name('course_assign.delete'); 
});