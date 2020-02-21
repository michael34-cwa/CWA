<?php

namespace App\Http\Controllers\Api;

use App\Model\Courses;
use App\Model\CourseCategories;
use App\Model\CategoryCourses;
 use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\CoursesRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

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
         return Courses::with(['getTasks','getCategory'])->latest()->paginate();  
    }

       public function getCourses()
    {
   
         return Courses::whereHas('getSchoolCourse', function ($q) {
            $q->whereIn('school_id', [ \Auth::guard('api')->user()->id]);
        })->with(['getTasks','getCategory'])->paginate();
 
    }
         
    public function getStudentCourses()
    {
   
         return Courses::whereHas('getStudentCourse', function ($q) {
            $q->whereIn('student_id', [ \Auth::guard('api')->user()->id]);
        })->with(['getTasks','getCategory'])->paginate(); 
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
 
    return Courses::where('id',$id)->with('getCategory')->first();  
      //  return Courses::findOrFail($id);
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function courseTasks($id)
    {
         return Courses::with(['getTasks','getCategory'])->find($id);  
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
        $article = Courses::findOrFail($id);

        $article->delete();

        return response([], 200);
    }
}
