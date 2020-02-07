<?php

namespace App\Http\Controllers\Api;

use App\Model\Tasks;
use Illuminate\Http\Request;
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
     return Tasks::with('getCourse')->latest()->paginate();  
         
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

       $technologies = new Tasks($request->validated());
       $technologies->category_name = $request->category_name; 
       $technologies->save(); 
      return response()->json($technologies, 201);
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
        return Tasks::findOrFail($id);
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
