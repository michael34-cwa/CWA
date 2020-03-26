<?php

use Illuminate\Support\Facades\Route;
  
Route::group(['middleware' => 'auth:api'], function() { 
     Route::get('/get_courses', 'CoursesController@getCourses')->name('courses.getCourses');
     Route::get('/get_student_courses', 'CoursesController@getStudentCourses');
    Route::get('/courses_category_list', 'CoursesController@coursesCategoryList');
    Route::post('/course_status/{id}', 'CoursesController@courseStatus');
    Route::post('/', 'CoursesController@store')->name('courses.store');
    Route::get('/', 'CoursesController@index')->name('courses.index');
    Route::get('/{id}', 'CoursesController@show')->name('courses.show');
    Route::match(['put', 'patch'], '/{id}/{status?}', 'CoursesController@update')->name('courses.update');
    Route::delete('/{id}', 'CoursesController@delete')->name('courses.delete');
    Route::get('/course_tasks/{id}', 'CoursesController@courseTasks');
});