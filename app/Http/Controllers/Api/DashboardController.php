<?php

namespace App\Http\Controllers\Api;
 
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use App\Model\CourseCategories;
use App\Model\Courses;
use App\Model\Tasks;
use App\Model\SchoolList;
class DashboardController extends Controller
{
 

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function adminDashboard(Request $request)
    {
        $course_categories = CourseCategories::count();
        $courses = Courses::count();
        $tasks = tasks::count();
        $school_list = SchoolList::count();
       return response()->json(['course_categories'=>$course_categories, 'courses' => $courses,
      'tasks' => $tasks, 'school_list' => $school_list], 201);
    }

   
}
