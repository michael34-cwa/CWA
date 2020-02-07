<?php

use Illuminate\Support\Facades\Route;

 
  //  Route::get('/courses_category_list', 'CoursesController@coursesCategoryList')->name('courses.coursesCategoryList');
Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'TasksController@store')->name('tasks.store');
    Route::get('/', 'TasksController@index')->name('tasks.index');
    Route::get('/{id}', 'TasksController@show')->name('tasks.show');
    Route::match(['put', 'patch'], '/{id}', 'TasksController@update')->name('tasks.update');
    Route::delete('/{id}', 'TasksController@delete')->name('tasks.delete');
});