<?php

use Illuminate\Support\Facades\Route;

 

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/course_list', 'GroupsController@courseList'); 
    Route::get('/task_by_id/{id}', 'GroupsController@taskById'); 
    Route::get('/logs_time/{id}', 'GroupsController@logsTime');  
    Route::post('/task_add/{id}', 'GroupsController@addTask'); 
    Route::get('/assign_tasks/{id}', 'GroupsController@assignTasks'); 
    Route::get('/course_assign/{id}', 'GroupsController@courseAssign'); 
    Route::post('/course_assign/{id}', 'GroupsController@courseAddAssign'); 
    Route::get('/student_assign/{id}', 'GroupsController@studentAssign'); 
    Route::post('/student_assign/{id}', 'GroupsController@studentAdd'); 
    Route::get('/student/{sid}', 'GroupsController@student');
    Route::post('/{sid}', 'GroupsController@store');
    Route::get('/{sid}', 'GroupsController@index');
    Route::get('/{id}', 'GroupsController@show');
    Route::match(['put', 'patch'], '/{id}', 'GroupsController@update');
    Route::delete('/{id}', 'GroupsController@delete'); 
});