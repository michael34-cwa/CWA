<?php

use Illuminate\Support\Facades\Route;

 

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'CourseCategoriesController@store')->name('course_categories.store');
    Route::get('/', 'CourseCategoriesController@index')->name('course_categories.index');
    Route::get('/{id}', 'CourseCategoriesController@show')->name('course_categories.show');
    Route::match(['put', 'patch'], '/{id}', 'CourseCategoriesController@update')->name('course_categories.update');
    Route::delete('/{id}', 'CourseCategoriesController@delete')->name('course_categories.delete'); 
});