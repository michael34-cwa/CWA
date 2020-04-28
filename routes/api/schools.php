<?php

use Illuminate\Support\Facades\Route; 
     Route::group(['middleware' => 'auth:api'], function() { 
    Route::post('/{sid?}', 'SchoolsController@store');
    Route::get('/', 'SchoolsController@index')->name('school.index');
    Route::get('/{id}', 'SchoolsController@show')->name('school.show');
    Route::match(['put', 'patch'], '/{id}/{status?}', 'SchoolsController@update')->name('school.update');
    Route::delete('/{id}', 'SchoolsController@delete')->name('school.delete');
    Route::get('/admin/{id}', 'SchoolsController@adminList');
});