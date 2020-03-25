<?php

use Illuminate\Support\Facades\Route; 
 //   Route::get('/task_list', 'TasksController@taskList')->name('tasks.taskList');
    Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'TeachersController@store')->name('teachers.store');
    Route::get('/', 'TeachersController@index')->name('teachers.index');
    Route::get('/{id}', 'TeachersController@show')->name('teachers.show');
    Route::match(['put', 'patch'], '/{id}/{status?}', 'TeachersController@update')->name('teachers.update');
    Route::delete('/{id}', 'TeachersController@delete')->name('teachers.delete');
    Route::get('/school/{id}', 'TeachersController@teacherList');
});