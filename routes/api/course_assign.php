<?php

use Illuminate\Support\Facades\Route;

 

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/student/{id}', 'CourseAssignController@getCourseStudent');
    Route::get('/school/{id?}', 'CourseAssignController@getSchoolCourse');
    Route::post('/student/{id?}', 'CourseAssignController@addCourse');
    Route::delete('/student/{id}', 'CourseAssignController@deleteCourse');
    Route::get('/task/{id}', 'CourseAssignController@getTaskStudent');
    Route::delete('/task/{id}', 'CourseAssignController@deleteTask');
    Route::get('/task_by_id/{id}', 'CourseAssignController@taskById');
    Route::post('/task/{id?}', 'CourseAssignController@addTask');
    Route::post('/{id?}', 'CourseAssignController@store')->name('course_assign.store');
    Route::get('/', 'CourseAssignController@index')->name('course_assign.index');
    Route::get('/{id}', 'CourseAssignController@show')->name('course_assign.show');
    Route::match(['put', 'patch'], '/{id}/{status?}', 'CourseAssignController@update')->name('course_assign.update');
    Route::delete('/{id}', 'CourseAssignController@delete')->name('course_assign.delete');

});