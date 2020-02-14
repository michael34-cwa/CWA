<?php

use Illuminate\Support\Facades\Route;
 
 //   Route::get('/task_list', 'TasksController@taskList')->name('tasks.taskList');
    Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'SchoolsController@store')->name('tasks.store');
    Route::get('/', 'SchoolsController@index')->name('tasks.index');
    Route::get('/{id}', 'SchoolsController@show')->name('tasks.show');
    Route::match(['put', 'patch'], '/{id}', 'SchoolsController@update')->name('tasks.update');
    Route::delete('/{id}', 'SchoolsController@delete')->name('tasks.delete');
});