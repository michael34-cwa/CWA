<?php

namespace App\Http\Controllers\Api;


 
use App\User; 
use App\Model\Courses;
use Illuminate\Support\Facades\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SchoolRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Cartalyst\Sentinel\Users\UserInterface;
use App\Model\Activations;
 use App\Model\SchoolProfile;

class SchoolsController  extends Controller
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
 
        $user = \Auth::guard('api')->user();

        $data =  User::WhereHas('SchoolAdmin', function ($q) use ($user) {
                $q->where('created_by', $user->id);
            })
            ->with('ActivationsUser', 'SchoolAdmin')->where('id', "!=", $user->id);
         if ($dataSearch) {
            $data ->orWhere('email', 'LIKE', '%' . $dataSearch . '%')
               ->orWhere('first_name', 'LIKE',  '%' . $dataSearch . '%')
                ->orWhere('last_name', 'LIKE',  '%' . $dataSearch . '%')
                 ->orWhere('phone', 'LIKE',  '%' . $dataSearch . '%');

             }

        return $data->paginate();

      //  return   SchoolProfile::with('User')->paginate();
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


    public function adminList(Request $request,$id)
    {
        $dataSearch   =   Request::get('search');
        $user = \Auth::guard('api')->user();
        $userData =  User::latest();
        if ($dataSearch) {
            $userData->where('email', 'LIKE', "%{$dataSearch}%");
            $userData->orWhere('first_name', 'LIKE', "%{$dataSearch}%");
            $userData->orWhere('last_name', 'LIKE', "%{$dataSearch}%");
            $userData->orWhere('phone', 'LIKE', "%{$dataSearch}%");
        }
        $userData->whereHas('SchoolAdmin', function ($q) use ($id) {
            $q->where('school_admin_id', $id);
        });

        $userData->with('ActivationsUser', 'SchoolAdmin')->where('id', "!=", $user->id);

        return  $userData->paginate();
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
      //  return Schools::all();
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
                  'phone' => $data['phone'],

            ];

            $user = \Sentinel::registerAndActivate($credential);
            if (!empty($user)) {
                $userUpdate = User::findOrFail($user->id);  
                $role = \Sentinel::findRoleByName('school');
                $role->users()->attach($user);
                $userId = \Auth::guard('api')->user(); 
               $schoolId = SchoolProfile::where('school_id', $userId->id)->first();
              $schoolList = new SchoolProfile();
                if(empty($schoolId)){ 
                    $schoolList->school_id = $user->id;
                    $schoolList->school_admin_id =  $userId->id;
                    $schoolList->created_by =  $userId->id; 
                }else{ 
                    $schoolList->school_id = $user->id;
                    $schoolList->school_admin_id = $schoolId->school_admin_id;
                    $schoolList->created_by =  $userId->id; 
                }
                $schoolList->save();      
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
