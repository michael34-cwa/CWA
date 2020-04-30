<?php

namespace App\Http\Controllers\Api;

use App\Model\Courses;
use App\Model\CourseCategories;
use App\Model\CategoryCourses;
use App\Model\SchoolProfile;
 use Illuminate\Support\Facades\Request;
 use App\Model\StudentCourses;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\CoursesRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use App\Model\StudentsGroup;

class CoursesController  extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
     public function index(Request $request)
    {   
       $dataSearch   =   Request::get('search');
         return Courses::with(['getTasks','getCategory'])->whereHas('getCategory', function($q) use ($dataSearch) {
        if($dataSearch){
         $q->where('category_name', 'LIKE', "%{$dataSearch}%");
        }
        }) ->latest()
         ->orWhere('course_name', 'LIKE', "%{$dataSearch}%")
         ->paginate();  
    }



       public function getCourses()
    {
        $dataSearch   =   Request::get('search'); 
      $id =  \Auth::guard('api')->user()->id;
      $school = SchoolProfile::where('school_id',$id)->first();
   
      if(! empty($school)){
        $id =  $school['school_admin_id'];
      }
      
         return Courses::whereHas('getSchoolCourse', function ($q)  use ($id) {
            $q->where('school_id', $id );
        })->with(['getCategory'])->Where('course_name', 'LIKE', "%{$dataSearch}%")->latest()->paginate();
    }
         
    public function getStudentCourses($id=null)
    {
     
        $dataSearch  =  Request::get('search');
        if($id == null){
            $user = \Auth::guard('api')->user();
           $id =  $user->id;
        }else{
            $id = base64_decode(urldecode($id));
        } 

        return StudentsGroup::whereHas('getStudentCourse', function ($q) use ($dataSearch) {
                if( $dataSearch){
                    $q->where('course_name', 'LIKE', "%{$dataSearch}%");
                }
                }) 
            ->with(array('getStudentCourse','getCourseTasks','getCategory'))
        ->where('student_id',$id)->paginate();




        // return StudentCourses::whereHas('getStudentCourse', function ($q) use ($dataSearch) {
        //     if( $dataSearch){
        //         $q->where('course_name', 'LIKE', "%{$dataSearch}%");
        //     }
        //     }) 
        // ->with(array('getCourseTasks','getCategory','getStudentCourse'))
        // ->where('student_id',$id)->paginate();

    }


    /**
     * get all published articles
     *
     * @return mixed
     */
    public function publishedArticles()
    {
        return Courses::loadAllPublished();
    }


    /**
     * Get single published article
     *
     * @param $slug
     * @return mixed
     */
    public function publishedArticle($slug)
    {
        return Courses::loadPublished($slug);
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
     * get all published articles
     *
     * @return mixed
     */
    public function coursesCategoryList()
    {   
        return CourseCategories::all();
    }

    
    
    /**
     * Store a newly created resource in storage.
     *
     * @param CoursesRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CoursesRequest $request)
    {
      
        $course = new Courses($request->validated());
        $course->course_name = $request->course_name;
        $course->course_description = $request->course_description;
        $course->is_active = $request->is_active;
        $course->type = $request->type == 1 ? '1' : '0';
        $course->save();
        if($course){
        $course->getCategory()->attach($request->cat_id);
        } 
        return response()->json($course, 201);
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
    return Courses::where('id',$id)->with('getCategory')->first();  
      //  return Courses::findOrFail($id);
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function courseTasks($id,$sid = null)
    {
        // $user = \Auth::guard('api')->user();
        $id = base64_decode(urldecode($id));
        $sid = base64_decode(urldecode($sid));
        $user = \Auth::guard('api')->user();
        $uid =  $user->id;
        return StudentsGroup::with(array('getStudentCourse','getCourseTasks'))
    ->where('student_id',$uid)->find($id);

        // return StudentCourses::with(array('getStudentCourse','getCourseTasks','getCategory','getStudentCourse'))->where('student_id', $sid)->find($id);
 
        
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
    // public function update(ArticleRequest $request, $id)
    // {
    //     $article = Courses::findOrFail($id);

    //     $data = $request->validated();
    //     $data['slug'] = Str::slug($data['title']);
    //     $article->update($data);

    //     return response()->json($article, 200);
    // }

      public function update(CoursesRequest $request, $id,$status=null)
    { 
        $id = base64_decode(urldecode($id)); 
        $course = Courses::findOrFail($id); 
        $course->course_name = $request->course_name;
        $course->course_description = $request->course_description;
        $course->is_active = $request->is_active;
        $course->save();
        if($course){
       if($status == 'undefined'){ 
       if(!isset($request->cat_id[0]['id'])){
        CategoryCourses::where('course_id',$course->id)->delete();
        $course->getCategory()->attach($request->cat_id);
       }        
    }
        } 
        return response()->json($course, 200); 
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

        $article = Courses::findOrFail($id);

        $article->delete();

        return response([], 200);
    }

 
    public function courseStatus(Request $request, $id)
    {
        $id = base64_decode(urldecode($id));

      $studentCourse = StudentCourses::findOrFail($id); 
   
     if($studentCourse->status == 0){ 
      $corse =  Courses::find($studentCourse->course_id);   
      $courseName =  str_replace(' ', '',strtolower($corse->course_name));
      $dbname = $courseName.'_'.$studentCourse->school_id.'_'.time();
      $flname = $courseName.'_'.$studentCourse->student_id.'_'.$studentCourse->course_id;
       $path = $_SERVER['DOCUMENT_ROOT'];  
 
       $path = str_replace("public","",$path); 
  	$path = str_replace("html","",$path);   
        $structure = $path.'filemanager/projects/'.$flname;
	$oldmask = umask(0); 
      if (!mkdir($structure, 0777, true)) {  
        die('Failed to create folders...');
    } 
	umask($oldmask);

        \Artisan::call('mysql:createdb '. $dbname);
        $studentCourse->path = $flname; 
        $studentCourse->status = '1'; 
     }   
      $studentCourse->save();
      
        return response()->json($studentCourse, 201);
    }
}
