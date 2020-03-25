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
        $course_categories = $this->thousandsCurrencyFormat($course_categories);
        $courses = Courses::count();
        $courses = $this->thousandsCurrencyFormat($courses);
        $tasks = tasks::count();
        $tasks = $this->thousandsCurrencyFormat($tasks);
        $school_list = SchoolList::count();
        $school_list = $this->thousandsCurrencyFormat($school_list);
       return response()->json(['course_categories'=>$course_categories, 'courses' => $courses,
      'tasks' => $tasks, 'school_list' => $school_list], 201);
    }

   
    private function thousandsCurrencyFormat($num)
  { 
    if ($num > 1000) { 
      $x = round($num);
      $x_number_format = number_format($x);
      $x_array = explode(',', $x_number_format);
      $x_parts = array('k', 'm', 'b', 't');
      $x_count_parts = count($x_array) - 1;
      $x_display = $x;
      $x_display = $x_array[0] . ((int) $x_array[1][0] !== 0 ? '.' . $x_array[1][0] : '');
      $x_display .= $x_parts[$x_count_parts - 1]; 
      return $x_display;
    } 
    return $num;
  }
}
