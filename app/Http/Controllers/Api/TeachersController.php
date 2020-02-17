<?php

namespace App\Http\Controllers\Api;


use App\Model\Schools;

use App\User;

use App\Model\CategoryCourses;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SchoolRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
 use App\Model\Activations;
use Activation;
use App\Model\School;

class TeachersController  extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request)
    { 
        return User::whereHas('roles', function ($q) {
            $q->whereIn('slug', ['teacher']);
        })->with('ActivationsUser')->paginate();
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
        return Schools::all();
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param SchoolRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(SchoolRequest $request)
    {
        try {
           
            $data  = $request->all();
            //Get and check user data by email
            $userData = User::GetUserByMail($data['email']); 
            //Check Email Exit
            if (!empty($userData)) { 
                return response()->json(['message' => 'This email already exit.','status'=>0], 422);
            }
  
            $credential = [
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'], 
                'password' => $data['password'],

            ];

            $user = \Sentinel::registerAndActivate($credential);
            if (!empty($user)) {
                $userUpdate = User::findOrFail($user->id); 
                $userUpdate->update($request->all());
                $role = \Sentinel::findRoleByName('teacher');
                $role->users()->attach($user);

            }
            return response()->json($user, 201);
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

        return User::where('id', $id)->first();
        //  return Courses::findOrFail($id);
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

    public function update(SchoolRequest $request, $id, $status = null)
    { 

        if($status == 0){
         $user = User::findOrFail($id);
        $user->update($request->all());
        }else{
         $user = \Sentinel::findById($id);
         $UsrActCkh = Activations::where('user_id',  $id)->first();
        if (empty($UsrActCkh) || $UsrActCkh['completed'] == '0') {
            $ActCode = \Activation::create($user);
            \Activation::complete($user, $ActCode['code']);
        } else {
            \Activation::remove($user);
        }
       }
        return response()->json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        // $article = Schools::findOrFail($id);

        // $article->delete();

        // return response([], 200);
    }
}
