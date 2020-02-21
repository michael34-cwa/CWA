<?php

use Illuminate\Support\Facades\Route; 
     Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'SchoolsController@store')->name('school.store');
    Route::get('/', 'SchoolsController@index')->name('school.index');
    Route::get('/{id}', 'SchoolsController@show')->name('school.show');
    Route::match(['put', 'patch'], '/{id}/{status?}', 'SchoolsController@update')->name('school.update');
    Route::delete('/{id}', 'SchoolsController@delete')->name('school.delete');

});