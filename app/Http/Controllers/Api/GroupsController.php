<?php

namespace App\Http\Controllers\Api;
 
use App\Model\Groups;
use App\Model\StudentProfile;
use App\Model\GroupStudents;
use App\Model\GroupCourses;
use App\Model\GroupTasks;
use App\Model\Tasks;
use App\Model\Courses;
use App\Model\StudentsGroup;
 
//use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\TechnologiesRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
 use Illuminate\Support\Facades\Request;


class GroupsController  extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request,$sid)
    {  
        $id = base64_decode(urldecode($sid));
       $dataSearch   =   Request::get('search');
        $technologies =  Groups::latest()
             ->where('group_name', 'LIKE', "%{$dataSearch}%")->where('school_id',$id)->latest()->paginate();
        
        return response()->json($technologies, 201);
    }

    public function student(Request $request,$sid)
    {  
        $id = base64_decode(urldecode($sid));

        $students =   StudentProfile::with('User')->where('school_id',$id)->latest()->get();
        return response()->json(['data'=>$students], 201);
    }

    public function studentAssign(Request $request,$id)
    {  
       $id = base64_decode(urldecode($id));  
        $dataSearch   =   Request::get('search'); 
   
            $students =   GroupCourses::where('group_id',$id)->latest();

            if($dataSearch){
            $students->whereHas('getCourse', function($q) use ($dataSearch) { 
                 $q->where('course_name', 'LIKE', "%{$dataSearch}%"); 
                });
            }

            // if($dataSearch){
            //     $students->orWhereHas('getTask', function($q) use ($dataSearch) {
            //           $q->where('task_name', 'LIKE', "%{$dataSearch}%");
                   
            //         }) ;
            //     }

            //     if($dataSearch){
            //         $students->orWhereHas('User', function($qu) use ($dataSearch) {
            //             $qu->where('first_name', 'LIKE', "%{$dataSearch}%")->orWhere('last_name', 'LIKE', "%{$dataSearch}%");
                       
            //             }) ;
            //         }
    
                    $students =     $students->with(['getCourse','getTask','User'])->paginate();
        return response()->json($students, 201);
    }



    public function logsTime(Request $request,$id)
    {  
       $id = base64_decode(urldecode($id));  
        $dataSearch   =   Request::get('search');  
         $tasks =   GroupTasks::where('group_course_id',$id);

         if($dataSearch){
            $tasks->whereHas('getTask', function($q) use ($dataSearch) { 
                 $q->where('task_name', 'LIKE', "%{$dataSearch}%"); 
                });
            }

         $tasks =     $tasks->with([ 'getTask','getLogs' ])->where('group_course_id',$id)->latest()->paginate();
 
         return response()->json( $tasks , 201);
    }
     
    /**
     * get all published articles
     *
     * @return mixed
     */
    public function publishedArticles()
    {  
        return Groups::loadAllPublished();
    }

    /**
     * Get single published article
     *
     * @param $slug
     * @return mixed
     */
    public function publishedArticle($slug)
    {
        return Groups::loadPublished($slug);
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
     * @param ArticleRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request , $sid)
    { 
        $group_name  = Request::get('group_name'); 
      $catCheck =  Groups::where('group_name','LIKE', "%{$group_name}%")->first();
      $id = base64_decode(urldecode($sid));
  //  if(empty($catCheck)){
       $technologies = new Groups();
       $technologies->group_name = $group_name; 
       $technologies->school_id = $id; 
       $technologies->save(); 
      return response()->json($technologies, 201);
  //  }else{
  //    return response()->json(['message' => 'This group already exits', 'status' => 0], 422);
  //  }
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
        return Groups::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ArticleRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $group_name  = Request::get('group_name');
        $id = base64_decode(urldecode($id));
        $technologies = Groups::findOrFail($id);
        $technologies->group_name = $group_name; 
        $technologies->save();

        return response()->json($technologies, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $id = base64_decode(urldecode($id));
        $article = Groups::findOrFail($id);

        $article->delete();

        return response([], 200);
    }


    public function studentAdd(Request $request, $id)
    {
        try {
          $id = base64_decode(urldecode($id));   

              $stuId =    $request::post('name');
              $corsId =   base64_decode($request::post('course_name'));
              $tskId =    $request::post('task_name');
         
              $courseVal =   GroupCourses::where('course_id', $corsId)->where('group_id', $id)->first();

               if(empty($courseVal)){

                $courseVal = new GroupCourses();
                    $courseVal->course_id = $corsId; 
                    $courseVal->group_id = $id; 
                    $courseVal->save();
                    $courseVal->getTask()->attach($tskId);
                    $courseVal->User()->attach($stuId);
                     
                } else{
                    
                   // $courseVal->getTask()->sync($tskId); 

                    $tasks =  GroupTasks::where('group_course_id',$courseVal->id)->pluck('task_id')->toArray();
                    $result = array_intersect( $tasks, $tskId); 
                   if(empty($result)){ 
                     $courseVal->getTask()->attach($tskId); 
                  //   return response()->json($courseVal, 201);

                   } 
            
      

               $student =   StudentsGroup::where('group_courses_id',$courseVal->id)->pluck('student_id')->toArray();
                 $result = array_intersect( $student, $stuId); 
                if(empty($result)){
                    if(count($student) >=2){
               return response()->json(['message' => 'Only 2 students can be assigned to a group.', 'status' => 0], 422);             
 
                      }  else{
                  $courseVal->User()->attach($stuId);
                  return response()->json($courseVal, 201);

                        }
            
                }else{
             //       return response()->json(['message' => 'Student already assigned with this group.', 'status' => 0], 422);             
                }
            }

            
            return response()->json($courseVal, 201);
        } catch (\Exception $e) {

            dd($e->getMessage(), $e->getCode(), $e->getTrace());
            return response()->json([
                "error" => "invalid_credentials",
                "message" => "The user credentials were incorrect."
            ], 401);
        }
    }



    public function courseAssign(Request $request, $id)
    {
        $id = base64_decode(urldecode($id));    
        $dataSearch   =   Request::get('search');
        return GroupCourses::with(['getCourse'])->whereHas('getCourse', function ($q) use ($dataSearch) {
            if ($dataSearch) {
                $q->where('course_name', 'LIKE', "%{$dataSearch}%");
            }
        })->where('group_student_id', $id)->latest()
            ->paginate();
    }

    public function courseAddAssign(Request $request, $id)
    {
        try {
            $id = base64_decode(urldecode($id));   

            $courseId =    $request::post('name');
            $courseId = base64_decode(urldecode($courseId));   
 
            $stuData =   GroupCourses::where('group_student_id', $id)->where('course_id', $courseId)->first();

            if(!empty($stuData)){
                return response()->json(['message' => 'Course already assigned with this student.', 'status' => 0], 422);
            }
 
               // if (empty($courseData)) {
                    $courseVal = new GroupCourses();
                    $courseVal->group_student_id = $id;
                    $courseVal->course_id = $courseId;  
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

    public function assignTasks(Request $request, $id)
    {
        $id = base64_decode(urldecode($id));    
        $dataSearch   =   Request::get('search');
        return GroupTasks::with(['getTask'])->whereHas('getTask', function ($q) use ($dataSearch) {
            if ($dataSearch) {
                $q->where('task_name', 'LIKE', "%{$dataSearch}%");
            }
        })->where('group_course_id', $id)->latest()
            ->paginate();
    }


    public function taskById(Request $request, $id)
    {
        $id = base64_decode(urldecode($id));   

        $task =   Tasks::where('course_id', $id)->latest()->get();

         return response()->json(['data'=>$task], 201);

    }

    public function courseList(Request $request)
    { 

        $course =   Courses::latest()->where('type','1')->get();

         return response()->json(['data'=>$course], 201);

    }

    

    public function addTask(Request $request, $id)
    {

        try {
            $id = base64_decode(urldecode($id));   

            $taskId =    $request::post('name');

            $taskAssnd =  GroupTasks::where('group_course_id', $id)->where('task_id', $taskId)->first();
            if(!empty($taskAssnd)){
                return response()->json(['message' => 'Task already assigned with this student course.', 'status' => 0], 422);
            }
        
         
                    $courseVal = new GroupTasks();
                    $courseVal->group_course_id = $id;
                    $courseVal->task_id = $taskId; 
                    $courseVal->save();
           
            return response()->json($taskAssnd, 201);
        } catch (\Exception $e) {

            dd($e->getMessage(), $e->getCode(), $e->getTrace());
            return response()->json([
                "error" => "invalid_credentials",
                "message" => "The user credentials were incorrect."
            ], 401);
        }
    }
}
