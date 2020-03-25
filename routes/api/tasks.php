<?php

use Illuminate\Support\Facades\Route;

 
    Route::get('/task_list', 'TasksController@taskList')->name('tasks.taskList');
    Route::group(['middleware' => 'auth:api'], function() {
    Route::get('student/{id}', 'TasksController@studentTask');
    Route::post('student/{id}', 'TasksController@taskStatus');
    Route::post('/', 'TasksController@store')->name('tasks.store');
    Route::get('/', 'TasksController@index')->name('tasks.index');
    Route::get('/{id}', 'TasksController@show')->name('tasks.show');
    Route::match(['put', 'patch'], '/{id}', 'TasksController@update')->name('tasks.update');
    Route::delete('/{id}', 'TasksController@delete')->name('tasks.delete');
});