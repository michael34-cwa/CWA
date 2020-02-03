<?php

use Illuminate\Support\Facades\Route;

Route::get('published', 'TechnologiesController@publishedArticles')->name('courses.published.index');
Route::get('published/{id}', 'CoursesController@publishedArticle')->name('courses.published.show');

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'TechnologiesController@store')->name('technologies.store');
    Route::get('/', 'TechnologiesController@index')->name('technologies.index');
    Route::get('/{id}', 'TechnologiesController@show')->name('technologies.show');
    Route::match(['put', 'patch'], '/{id}', 'TechnologiesController@update')->name('technologies.update');
    Route::delete('/{id}', 'TechnologiesController@delete')->name('technologies.delete');
});