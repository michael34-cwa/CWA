<?php

namespace App\Http\Controllers\Api;

use App\Model\Tasks;
use App\Model\Courses;
use App\Model\CourseTasks;
 use Illuminate\Support\Facades\Request; 
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\TasksRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class TasksController  extends Controller
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
         return Tasks::with(['getCourse'])->whereHas('getCourse', function($q) use ($dataSearch) {
        if($dataSearch){
         $q->where('course_name', 'LIKE', "%{$dataSearch}%");
        }
        })
         ->orWhere('task_name', 'LIKE', "%{$dataSearch}%")
         ->latest()
         ->paginate();  

   
         
    }

    /**
     * get all published articles
     *
     * @return mixed
     */
    public function publishedArticles()
    {  
        return Tasks::loadAllPublished();
    }

    /**
     * Get single published article
     *
     * @param $slug
     * @return mixed
     */
    public function publishedArticle($slug)
    {
        return Tasks::loadPublished($slug);
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
    public function store(TasksRequest $request)
    { 
        
        $task = new Tasks($request->validated());
        $task->task_name = $request->task_name; 
        $task->task_description = $request->task_description; 
        $task->course_id = $request->course_id; 
        $task->is_active = $request->is_active; 
        $task->save(); 
      return response()->json($task, 201);
    }


    public function taskDis(Request $request, $id)
    { 
     $description  = Request::post('description'); 
    //  print_r( $description); die;

    //     $input = $this->validate($request, [
    //         'description' => 'required|min:2|max:500',
    //      ] );


        $task = CourseTasks::findOrFail($id);
        $task->status = '0';  
        $task->description = $description;  
        $task->save(); 
        return response()->json($task, 201);
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
 
           return Tasks::where('id',$id)->with('getCourse')->first();  
    }

    public function taskStatus(Request $request, $id)
    { 
        $task = CourseTasks::findOrFail($id);
      if($task->status == '1'){
        $task->status = '2';
      }else{
        $task->status = '1';
      }
         $task->save(); 
      return response()->json($task, 201);
    }
    

        public function taskList()
    { 
        return Courses::all();
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

    public function studentTask(Request $request, $id)
    { 
 
           return Tasks::where('id',$id)->with('getTaskPro')->first();  
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ArticleRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(TasksRequest $request, $id)
    {   
        $task = Tasks::findOrFail($id);
        $task->task_name = $request->task_name; 
        $task->task_description = $request->task_description; 
        $task->course_id = $request->course_id; 
        $task->is_active = $request->is_active; 
        $task->save(); 
        return response()->json($task, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $article = Tasks::findOrFail($id);

        $article->delete();

        return response([], 200);
    }
}
