<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// default name space for all routes is 'App\Http\Controllers\Api'
$api_version = config('api.api_version');
Route::post('reset_password', 'Auth\ResetPasswordController@resetPassword');
Route::group(["prefix" => "{$api_version}"], function() {
    Route::get('/token', 'SchoolsController@chatList');


    // register auth routes
    Route::prefix('auth')
        ->group(base_path('routes/api/auth.php'));
    // register users routes
    Route::prefix('users')
        ->group(base_path('routes/api/users.php')); 
        // register courses routes
    Route::prefix('courses')
        ->group(base_path('routes/api/courses.php'));
    Route::prefix('course_categories')
        ->group(base_path('routes/api/course_categories.php'));
            Route::prefix('tasks')
        ->group(base_path('routes/api/tasks.php'));
    Route::prefix('schools')
        ->group(base_path('routes/api/schools.php'));
     Route::prefix('teachers')
        ->group(base_path('routes/api/teachers.php'));       
     Route::prefix('students')
        ->group(base_path('routes/api/students.php'));       
          Route::prefix('school_lists')
        ->group(base_path('routes/api/school_lists.php'));
    Route::prefix('course_assign')
        ->group(base_path('routes/api/course_assign.php'));
    Route::prefix('dashboard')
        ->group(base_path('routes/api/dashboard.php'));
    Route::prefix('project_admin')
        ->group(base_path('routes/api/project_admin.php'));  
});
