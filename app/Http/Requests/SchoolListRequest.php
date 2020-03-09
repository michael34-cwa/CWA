<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SchoolListRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
             'email' => 'required|min:2|max:32', 
             'school_name' => 'required|min:2|max:32', 
             'phone' => 'required|min:2|max:20', 
             'school_description' => 'required|min:2|max:200', 
             'school_address' => 'required|min:2|max:60', 
              'is_active' => 'required', 
        ];
    }
    public function attributes()
{
    return [
        'school_name' => 'School Name',
        'school_description' => 'School Description',
        'school_address' => 'School Address',
        'is_active' => 'School Status',
    ];
}
}
