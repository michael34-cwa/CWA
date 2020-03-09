<?php

use Illuminate\Support\Facades\Route;

 

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'SchoolListsController@store')->name('school_lists.store');
    Route::get('/', 'SchoolListsController@index')->name('school_lists.index');
    Route::get('/{id}', 'SchoolListsController@show')->name('school_lists.show');
    Route::match(['put', 'patch'], '/{id}/{status?}', 'SchoolListsController@update')->name('school_lists.update');
    Route::delete('/{id}', 'SchoolListsController@delete')->name('school_lists.delete'); 
});