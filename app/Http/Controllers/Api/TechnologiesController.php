<?php

namespace App\Http\Controllers\Api;

use App\Model\Technologies;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\TechnologiesRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class TechnologiesController  extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request)
    {  
        return Technologies::loadAll();
    }

    /**
     * get all published articles
     *
     * @return mixed
     */
    public function publishedArticles()
    {
        return Technologies::loadAllPublished();
    }

    /**
     * Get single published article
     *
     * @param $slug
     * @return mixed
     */
    public function publishedArticle($slug)
    {
        return Technologies::loadPublished($slug);
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
       $technologies = new Technologies;
       $technologies->technology_name = $request->title; 
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
        if (!$request->user()->is_admin) {
            return Technologies::mine($request->user()->id)->findOrFail($id);
        }

        return Technologies::findOrFail($id);
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
    public function update(ArticleRequest $request, $id)
    {
        $article = Technologies::findOrFail($id);

        $data = $request->validated();
        $data['slug'] = Str::slug($data['title']);
        $article->update($data);

        return response()->json($article, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $article = Technologies::findOrFail($id);

        $article->delete();

        return response([], 200);
    }
}