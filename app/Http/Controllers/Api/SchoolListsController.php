<?php

namespace App\Http\Controllers\Api;

use App\Model\SchoolList;
//use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\SchoolListRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Request;


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
        $schoolData =  SchoolList::latest();

        if ($dataSearch) {
            $schoolData->where('school_name', 'LIKE', "%{$dataSearch}%");
            $schoolData->orWhere('phone', 'LIKE', "%{$dataSearch}%");
            $schoolData->orWhere('school_description', 'LIKE', "%{$dataSearch}%");
            $schoolData->orWhere('school_address', 'LIKE', "%{$dataSearch}%");
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

        $schoolList = new SchoolList($request->validated());
        $schoolList->school_name = $request->school_name;
        $schoolList->phone = $request->phone;
        $schoolList->school_description = $request->school_description;
        $schoolList->school_address = $request->school_address;
        $schoolList->is_active = $request->is_active;
        $schoolList->save();
        return response()->json($schoolList, 201);
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
        return SchoolList::findOrFail($id);
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
    public function update(SchoolListRequest $request, $id)
    {

        $schoolList = SchoolList::findOrFail($id);
        $schoolList->school_name = $request->school_name;
        $schoolList->phone = $request->phone;
        $schoolList->school_description = $request->school_description;
        $schoolList->school_address = $request->school_address;
        $schoolList->is_active = $request->is_active;
        $schoolList->save();
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
        $article = SchoolList::findOrFail($id);

        $article->delete();

        return response([], 200);
    }
}
