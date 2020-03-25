<?php

use Illuminate\Support\Facades\Route;


Route::group(['middleware' => 'auth:api'], function() { 
    Route::get('/', 'DashboardController@index')->name('dashboard.index');
    Route::get('/admin', 'DashboardController@adminDashboard'); 
});