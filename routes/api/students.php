<?php

use Illuminate\Support\Facades\Route; 
     Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'StudentsController@store')->name('students.store');
    Route::get('/', 'StudentsController@index')->name('students.index');
    Route::get('/{id}', 'StudentsController@show')->name('students.show');
    Route::match(['put', 'patch'], '/{id}/{status?}', 'StudentsController@update')->name('students.update');
    Route::delete('/{id}', 'StudentsController@delete')->name('students.delete');
});