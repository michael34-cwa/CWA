<?php

namespace App\Http\Controllers\Api;

use App\Model\CourseCategories;
//use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\TechnologiesRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
 use Illuminate\Support\Facades\Request;


class CourseCategoriesController  extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request)
    { ;
       $dataSearch   =   Request::get('search');
        $technologies =  CourseCategories::latest()
             ->where('category_name', 'LIKE', "%{$dataSearch}%")->paginate();
        return response()->json($technologies, 201);
    }

    /**
     * get all published articles
     *
     * @return mixed
     */
    public function publishedArticles()
    {  
        return CourseCategories::loadAllPublished();
    }

    /**
     * Get single published article
     *
     * @param $slug
     * @return mixed
     */
    public function publishedArticle($slug)
    {
        return CourseCategories::loadPublished($slug);
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
    public function store(TechnologiesRequest $request)
    { 

       $technologies = new CourseCategories($request->validated());
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
        return CourseCategories::findOrFail($id);
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
    public function update(TechnologiesRequest $request, $id)
    {
        $technologies = CourseCategories::findOrFail($id);
        $technologies->category_name = $request->category_name; 
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
        $article = CourseCategories::findOrFail($id);

        $article->delete();

        return response([], 200);
    }
}
