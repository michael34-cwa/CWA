<?php

use Illuminate\Support\Facades\Route;

Route::get('published', 'CoursesController@publishedArticles')->name('courses.published.index');
Route::get('published/{id}', 'CoursesController@publishedArticle')->name('courses.published.show');

    Route::get('/courses_category_list', 'CoursesController@coursesCategoryList')->name('courses.coursesCategoryList');
Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'CoursesController@store')->name('courses.store');
    Route::get('/', 'CoursesController@index')->name('courses.index');
    Route::get('/{id}', 'CoursesController@show')->name('courses.show');
    Route::match(['put', 'patch'], '/{id}/{status?}', 'CoursesController@update')->name('courses.update');
    Route::delete('/{id}', 'CoursesController@delete')->name('courses.delete');
});