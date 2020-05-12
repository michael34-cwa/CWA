<?php

namespace App\Http\Controllers\Api;
 
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use App\Model\CourseCategories;
use App\Model\Courses;
use App\Model\Tasks;
use App\Model\StudentsGroup;
use App\Model\SchoolProfile;
use App\Model\TeacherProfiles;
use App\Model\StudentProfile;
use App\Model\SchoolList;
use App\Model\ProjectAdmin;
use App\Model\StudentCourses;
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
        $tasks = Tasks::count();
        $tasks = $this->thousandsCurrencyFormat($tasks);
        $school_list = SchoolList::count();
        $school_list = $this->thousandsCurrencyFormat($school_list);
       return response()->json(['course_categories'=>$course_categories, 'courses' => $courses,
      'tasks' => $tasks, 'school_list' => $school_list], 201);
    }


    public function schoolDashboard(Request $request)
    {
      $user = \Auth::guard('api')->user();
      $schoolId = SchoolProfile::where('school_id', $user->id)->first();
      if(empty( $schoolId)){
        $school = SchoolProfile::where('created_by',$user->id)->count();
      }else{
        $school = SchoolProfile::where('school_id',$user->id)->count();
      }
         $school = $this->thousandsCurrencyFormat($school);

         $teacherId = TeacherProfiles::where('school_id', $user->id)->first();
         if(empty( $teacherId)){
           $teacher = TeacherProfiles::where('created_by',$user->id)->count();
         }else{
           $teacher = TeacherProfiles::where('school_id',$user->id)->count();
         }
          $teacher = $this->thousandsCurrencyFormat($teacher);

          $studentId = StudentProfile::where('school_id', $user->id)->first();
          if(empty( $studentId)){
            $student = StudentProfile::where('created_by',$user->id)->count();
          }else{
            $student = StudentProfile::where('school_id',$user->id)->count();
          }
           $student = $this->thousandsCurrencyFormat($student);


           $projectId = ProjectAdmin::where('school_id', $user->id)->first();
           if(empty( $projectId)){
             $project = ProjectAdmin::where('created_by',$user->id)->count();
           }else{
             $project = ProjectAdmin::where('school_id',$user->id)->count();
           }
            $project = $this->thousandsCurrencyFormat($project);

          return response()->json(['school'=>$school,'teacher'=>$teacher
         ,'student'=>$student,'project'=>$project], 201);

     
    }

    public function projectDashboard(Request $request)
    {
      $user = \Auth::guard('api')->user();
  
        $student = StudentCourses::where('project_admin_id',$user->id)->count();
     
       $student = $this->thousandsCurrencyFormat($student);
       return response()->json(['student'=>$student], 201);
    }


    public function studentDashboard(Request $request)
    {
      $user = \Auth::guard('api')->user();
  
        $student = StudentsGroup::where('student_id',$user->id)->count();
     
       $student = $this->thousandsCurrencyFormat($student);
       return response()->json(['student'=>$student], 201);
    }


    public function teacherDashboard(Request $request)
    {
      $user = \Auth::guard('api')->user();
  
        $school_id = TeacherProfiles::where('teacher_id',$user->id)->first();
        $student = StudentProfile::where('school_id',  $school_id->school_id)->count();

       $student = $this->thousandsCurrencyFormat($student);
       return response()->json(['student'=>$student], 201);
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
