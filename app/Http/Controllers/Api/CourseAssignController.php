<?php

namespace App\Http\Controllers\Api;

use App\Model\CourseTasks;
use App\Model\SchoolCourses;
use App\Model\StudentCourses;
use App\Model\StudentProfile;
use App\Model\Tasks;
use App\Model\Courses;
//use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\SchoolListRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Request;
use App\User;
use App\Model\Activations;
use Activation;

class CourseAssignController  extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request)
    {


        // $schoolData = SchoolCourses::with(array('User' => function ($query) {
        //     $query->select('id', 'email', 'first_name', 'last_name', 'phone');
        // }, 'ActivationsUser'));

        // if ($dataSearch) {
        //     $schoolData = $schoolData->WhereHas('User', function ($query) use ($dataSearch) {
        //         $query->where('email', 'LIKE', "%{$dataSearch}%")->orWhere('phone', 'LIKE', "%{$dataSearch}%");
        //     })->orWhere('school_name', 'LIKE', "%{$dataSearch}%")->orWhere('school_address', 'LIKE', "%{$dataSearch}%");
        // }

        // return  $schoolData->paginate();
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @return  use Illuminate\Http\Request; 
     */
    public function store(Request $request, $id)
    { 
        try { 
             $id = base64_decode(urldecode($id));
             $course_id = base64_decode(urldecode($request::post('course_name')));     
             $courseData =   SchoolCourses::where('school_id', '=', $id)->where('course_id', '=', $course_id)->first();

                if (empty($courseData)) {
                    $courseVal = new SchoolCourses();
                    $courseVal->school_id = $id;
                    $courseVal->course_id = $course_id;
                    $courseVal->save();
                }
           
            if (isset($courseVal)) {
                $courseData = SchoolCourses::with(['getCourse'])->where('school_id', $id)
                    ->paginate();
                
                return response()->json($courseData, 201);
            } else {
                return response()->json(['message' => 'This course already assigned to this school', 'status' => 0], 422);
            }
        } catch (\Exception $e) {

            dd($e->getMessage(), $e->getCode(), $e->getTrace());
            return response()->json([
                "error" => "invalid_credentials",
                "message" => "The user credentials were incorrect."
            ], 401);
        }
    }


    public function addCourse(Request $request, $id)
    {
        try {
            $id = base64_decode(urldecode($id));   

            $courseId =    $request::post('course_name');
            $courseId = base64_decode(urldecode($courseId));   
            $user = \Auth::guard('api')->user();

            $stuData =   StudentCourses::where('student_id', $id)->where('course_id', $courseId)->first();

            if(!empty($stuData)){
                return response()->json(['message' => 'Course already assigned with this student.', 'status' => 0], 422);
            }
            $schoolId =  StudentProfile::where('student_id', $id)->first();

               // if (empty($courseData)) {
                    $courseVal = new StudentCourses();
                    $courseVal->student_id = $id;
                    $courseVal->course_id = $courseId;
                    $courseVal->project_admin_id = $user->id;
                    $courseVal->school_id = $schoolId->school_id; 
                    $courseVal->save();
             //   }
     
            return response()->json($courseVal, 201);
        } catch (\Exception $e) {

            dd($e->getMessage(), $e->getCode(), $e->getTrace());
            return response()->json([
                "error" => "invalid_credentials",
                "message" => "The user credentials were incorrect."
            ], 401);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $id = base64_decode(urldecode($id));    
        $dataSearch   =   Request::get('search');
        return SchoolCourses::with(['getCourse'])->whereHas('getCourse', function ($q) use ($dataSearch) {
            if ($dataSearch) {
                $q->where('course_name', 'LIKE', "%{$dataSearch}%");
            }
        })->where('school_id', $id)->latest()
            ->paginate();
    }

    public function getCourseStudent(Request $request, $id)
    {
        $id = base64_decode(urldecode($id));   

        $dataSearch   =   Request::get('search');
        return StudentCourses::with(['getCourse'])->whereHas('getCourse', function ($q) use ($dataSearch) {
            if ($dataSearch) {
                $q->where('course_name', 'LIKE', "%{$dataSearch}%");
            }
        })->where('student_id', $id)->latest()
            ->paginate();
    }


    public function getSchoolCourse(Request $request, $id =null)
    {
        if($id != ''){
        $id = base64_decode(urldecode($id));   
        $dataSearch   =   Request::get('search');
      $schoolId =  StudentProfile::where('student_id', $id)->first();
        return SchoolCourses::with(['getCourse'])->whereHas('getCourse', function ($q) use ($dataSearch) {
            if ($dataSearch) {
                $q->where('school_id', 'LIKE', "%{$dataSearch}%");
            }
        })->where('school_id', $schoolId->school_id)->latest()
            ->paginate();
    }else{ 
     return response()->json(['data' => Courses::where('is_active',1)->latest()->get()], 201);

    }
    }




    public function getTaskStudent(Request $request, $id)
    {
        $id = base64_decode(urldecode($id));   

        $dataSearch   =   Request::get('search');
        $courseStu   =   StudentCourses::findOrFail($id);  
        return CourseTasks::with(['getTask'])->whereHas('getTask', function ($q) use ($dataSearch) {
            if ($dataSearch) {
                $q->where('task_name', 'LIKE', "%{$dataSearch}%");
            }
        })->where('student_id', $courseStu->student_id)->where('course_id', $courseStu->course_id)->latest()
            ->paginate();
    }


    public function taskById(Request $request, $id)
    {
        $id = base64_decode(urldecode($id));   

        $courseStu   =   StudentCourses::findOrFail($id); 
        return Tasks::where('course_id', $courseStu->course_id)->latest()->paginate(400);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param SchoolListRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(SchoolListRequest $request, $id, $status = null)
    {
        $id = base64_decode(urldecode($id));   

        if ($status == 0) {
            $user = User::findOrFail($id);
            $user->phone = $request->phone;
            $user->save();
            $schoolList = SchoolList::find($user->id);
            $schoolList->school_name = $request->school_name;
            $schoolList->school_description = $request->school_description;
            $schoolList->school_address = $request->school_address;
            $schoolList->save();
        } else {
            $user = \Sentinel::findById($request->user_id);
            $UsrActCkh =  Activations::where('user_id',  $user->id)->first();
            if (empty($UsrActCkh) || $UsrActCkh['is_active'] == '0') {
                $ActCode = \Activation::create($user);
                \Activation::complete($user, $ActCode['code']);
            } else {
                \Activation::remove($user);
            }
            $schoolList =   $this->getList($id);
        }

        return response()->json($schoolList, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {        $id = base64_decode(urldecode($id));   


        $article = SchoolCourses::findOrFail($id);
        $article->delete();
        return response([], 200);
    }

    public function deleteCourse($id)
    {
        $id = base64_decode(urldecode($id));   

        $course  =    StudentCourses::findOrFail($id);
        if ($course->status == 1) {
        return response()->json(['message' => 'This Course not completed yet.', 'status' => 0], 422);
        }
        if ($course->status == 2) {
            return response()->json(['message' => 'Completed Course not removed.', 'status' => 0], 422);
        }
       $course = StudentCourses::findOrFail($id);
        $course->delete();
        return response([], 200);
    }


    public function deleteTask($id)
    {
        $id = base64_decode(urldecode($id));   

        $course  =    CourseTasks::findOrFail($id);
        if ($course->status == 1) {
            return response()->json(['message' => 'This task not completed yet.', 'status' => 0], 422);
        }
        if ($course->status == 2) {
            return response()->json(['message' => 'Completed task not removed.', 'status' => 0], 422);
        }
      //  $course = CourseTasks::findOrFail($id);
        $course->delete();
        return response([], 200);
    }



    public function addTask(Request $request, $id)
    {

        try {
            $id = base64_decode(urldecode($id));   

            $taskId =    $request::post('course_name');
            $user = \Auth::guard('api')->user();
            $stuData =   StudentCourses::where('id', $id)->first();
            $taskAssnd =  CourseTasks::where('student_id', $stuData->student_id)->where('task_id', $taskId)->where('created_by', $user->id)->first();
            if(!empty($taskAssnd)){
                return response()->json(['message' => 'Task already assigned with this student.', 'status' => 0], 422);
            }
        
        
               // if (empty($courseData)) {
                    $courseVal = new CourseTasks();
                    $courseVal->student_corse_id = $stuData->id;
                    $courseVal->course_id = $stuData->course_id;
                    $courseVal->task_id = $taskId;
                    $courseVal->school_id = $stuData->school_id;
                    $courseVal->student_id = $stuData->student_id;
                    $courseVal->created_by = $user->id;
                    $courseVal->save();
             //   }
     
            return response()->json($courseVal, 201);
        } catch (\Exception $e) {

            dd($e->getMessage(), $e->getCode(), $e->getTrace());
            return response()->json([
                "error" => "invalid_credentials",
                "message" => "The user credentials were incorrect."
            ], 401);
        }
    }
}