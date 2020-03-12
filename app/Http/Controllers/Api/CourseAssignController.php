<?php

namespace App\Http\Controllers\Api;

use App\Model\Courses;
use App\Model\SchoolCourses;
//use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\SchoolListRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Request;
use App\User;
use App\Model\Activations;
use Activation;

class CourseAssignController  extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request)
    {


        // $schoolData = SchoolCourses::with(array('User' => function ($query) {
        //     $query->select('id', 'email', 'first_name', 'last_name', 'phone');
        // }, 'ActivationsUser'));

        // if ($dataSearch) {
        //     $schoolData = $schoolData->WhereHas('User', function ($query) use ($dataSearch) {
        //         $query->where('email', 'LIKE', "%{$dataSearch}%")->orWhere('phone', 'LIKE', "%{$dataSearch}%");
        //     })->orWhere('school_name', 'LIKE', "%{$dataSearch}%")->orWhere('school_address', 'LIKE', "%{$dataSearch}%");
        // }

        // return  $schoolData->paginate();
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
     * @return  use Illuminate\Http\Request; 
     */
    public function store(Request $request, $id)
    {

        try {

            foreach ($request::post('course_name') as $key => $course_id) {
                $courseData =   SchoolCourses::where('school_id', '=', $id)->where('course_id', '=', $course_id)->first();

                if (empty($courseData)) {
                    $courseVal = new SchoolCourses();
                    $courseVal->school_id = $id;
                    $courseVal->course_id = $course_id;
                    $courseVal->save();
                }
            }
            if (isset($courseVal)) {
                $courseData = SchoolCourses::with(['getCourse'])->where('school_id', $id)
                    ->paginate();

                return response()->json($courseData, 201);
            } else {
                return response()->json('', 201);
            }
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
        $dataSearch   =   Request::get('search');
        return SchoolCourses::with(['getCourse'])->whereHas('getCourse', function ($q) use ($dataSearch) {
            if ($dataSearch) {
                $q->where('course_name', 'LIKE', "%{$dataSearch}%");
            }
        })->where('school_id', $id)
            ->paginate();
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

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $article = SchoolCourses::findOrFail($id);
        $article->delete();
        return response([], 200);
    }
}
