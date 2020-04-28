<?php

use Illuminate\Support\Facades\Route; 
     Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/{sid?}', 'StudentsController@store');
    Route::get('/', 'StudentsController@index')->name('students.index');
    Route::get('/{id}', 'StudentsController@show')->name('students.show');
    Route::match(['put', 'patch'], '/{id}/{status?}', 'StudentsController@update')->name('students.update');
    Route::delete('/{id}', 'StudentsController@delete')->name('students.delete');
    Route::get('/school/{id}', 'StudentsController@studentList');
});