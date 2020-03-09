<?php

namespace App\Http\Controllers\Api;

use App\Model\SchoolList;
//use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\SchoolListRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Request;
use App\User;
use App\Model\Activations;
use Activation;

class SchoolListsController  extends Controller
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


        $schoolData = SchoolList::with(array('User' => function ($query) {
            $query->select('id', 'email', 'first_name', 'last_name', 'phone');
        }, 'ActivationsUser'));

        if ($dataSearch) {
            $schoolData = $schoolData->WhereHas('User', function ($query) use ($dataSearch) {
                $query->where('email', 'LIKE', "%{$dataSearch}%")->orWhere('phone', 'LIKE', "%{$dataSearch}%");
            })->orWhere('school_name', 'LIKE', "%{$dataSearch}%")->orWhere('school_address', 'LIKE', "%{$dataSearch}%");
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

    /**
     * Store a newly created resource in storage.
     *
     * @param SchoolListRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(SchoolListRequest $request)
    {

        try {

            $data  = $request->all();
            //Get and check user data by email
            $userData = User::GetUserByMail($data['email']);
            //Check Email Exit
            if (!empty($userData)) {
                return response()->json(['message' => 'This email already exit.', 'status' => 0], 422);
            }

            $credential = [
                'first_name' => 'School',
                'last_name' => 'User',
                'email' => $data['email'],
                'password' => '123456',
                'phone' => $data['phone'],

            ];

            $user = \Sentinel::registerAndActivate($credential);
            if (!empty($user)) {
                $role = \Sentinel::findRoleByName('school');
                $role->users()->attach($user);

                $schoolList = new SchoolList();
                $schoolList->school_id = $user->id;
                $schoolList->school_name = $request->school_name;
                $schoolList->school_description = $request->school_description;
                $schoolList->school_address = $request->school_address;
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
    public function update(SchoolListRequest $request, $id, $status = null)
    {

        if ($status == 0) {
            $user = User::findOrFail($id);
            $user->phone = $request->phone;
            $user->save(); 
            $schoolList = SchoolList::find($user->id);
            $schoolList->school_name = $request->school_name;
            $schoolList->school_description = $request->school_description;
            $schoolList->school_address = $request->school_address;
            $schoolList->save();
        } else {
            $user = \Sentinel::findById($request->user_id);
            $UsrActCkh =  Activations::where('user_id',  $user->id)->first();
            if (empty($UsrActCkh) || $UsrActCkh['is_active'] == '0') {
                $ActCode = \Activation::create($user);
                \Activation::complete($user, $ActCode['code']);
            } else {
                \Activation::remove($user);
            }
            $schoolList =   $this->getList($id);
        }

        return response()->json($schoolList, 201);
    }

    private function getList($id)
    {
        return  SchoolList::with(array('User' => function ($query) {
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
        $article = SchoolList::findOrFail($id);

        $article->delete();

        return response([], 200);
    }
}
