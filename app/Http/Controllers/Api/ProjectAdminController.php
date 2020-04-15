<?php

namespace App\Http\Controllers\Api;

use App\Model\SchoolProfile;
use App\Model\ProjectAdmin;
use App\Model\StudentProfile;
//use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\SchoolRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Request;
use App\User;
use App\Model\Activations;
use Activation;

class ProjectAdminController  extends Controller
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
        $schoolId = SchoolProfile::select('school_admin_id')->where('school_id',$user->id)->first();
        if(empty($schoolId)){
         $schoolId = $user->id;
        }else{
         $schoolId  =  $schoolId->school_admin_id;
        }
        $schoolData = ProjectAdmin::with(array('User' => function ($query) {
            $query->select('id', 'email', 'first_name', 'last_name', 'phone');
        }, 'ActivationsUser', 'User'))->where('school_id', $schoolId);

        if ($dataSearch) {
            $schoolData = $schoolData->WhereHas('User', function ($query) use ($dataSearch) {
                $query->Where('first_name', 'LIKE', "%{$dataSearch}%")->orWhere('last_name', 'LIKE', "%{$dataSearch}%")->orWhere('email', 'LIKE', "%{$dataSearch}%")->orWhere('phone', 'LIKE', "%{$dataSearch}%");
            });
        }
        return  $schoolData->paginate();
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


    public function studentList(Request $request)
    {   
        $user = \Auth::guard('api')->user(); 
        $dataSearch   =   Request::get('search');
        $schoolId = ProjectAdmin::where('project_admin_id', $user->id)->first();
        

        $studentData = StudentProfile::with(array('User' => function ($query) {
            $query->select('id', 'email', 'first_name', 'last_name', 'phone');
        }, 'ActivationsUser', 'User'))->where('school_id', $schoolId->school_id);

        if ($dataSearch) {
            $studentData = $studentData->WhereHas('User', function ($query) use ($dataSearch) {
                $query->Where('first_name', 'LIKE', "%{$dataSearch}%")->orWhere('last_name', 'LIKE', "%{$dataSearch}%")->orWhere('email', 'LIKE', "%{$dataSearch}%")->orWhere('phone', 'LIKE', "%{$dataSearch}%");
            });
        }
        return  $studentData->latest()->paginate();
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
            $userId = \Auth::guard('api')->user();
            //Get and check user data by email
            $userData = User::GetUserByMail($data['email']);
            //Check Email Exit
            if (!empty($userData)) {
                return response()->json(['message' => 'This email already exit.', 'status' => 0], 422);
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
                // $userUpdate->update($request->all());
                $role = \Sentinel::findRoleByName('project_admin');
                $role->users()->attach($user); 
             
                $schoolId =  SchoolProfile::where('school_id', $userId->id)->first();
                $tstudentList = new ProjectAdmin();
               if(empty($schoolId)){
                $tstudentList->school_id =$userId->id;

               }else{
                $tstudentList->school_id = $schoolId->school_admin_id;

               }
             
                $tstudentList->project_admin_id = $user->id;
                $tstudentList->created_by =  $userId->id;
  
                $tstudentList->save();
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
        $id = base64_decode(urldecode($id));

        return   $this->getList($id);
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
     * @param SchoolListRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(SchoolRequest $request, $id, $status = null)
    {
        $id = base64_decode(urldecode($id));

        if ($status == 0) {
            $user = User::findOrFail($id);
            $user->update($request->all());
        } else {
            $user = \Sentinel::findById($id);
            $UsrActCkh = Activations::where('user_id',  $id)->first();
            if (empty($UsrActCkh) || $UsrActCkh['completed'] == '0') {
                $ActCode = \Activation::create($user);
                \Activation::complete($user, $ActCode['code']);
            } else {
                \Activation::remove($user);
            }
        }

        return response()->json($user, 201);
    }

    private function getList($id)
    {
       // $id = base64_decode(urldecode($id));

        return  ProjectAdmin::with(array('User' => function ($query) {
            $query->select('id', 'email', 'first_name', 'last_name', 'phone');
        }, 'ActivationsUser'))->find($id);
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

        $article = SchoolList::findOrFail($id);

        $article->delete();

        return response([], 200);
    }
}
