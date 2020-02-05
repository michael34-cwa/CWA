<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CoursesRequest extends FormRequest
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
             'course_name' => 'required|min:2', 
             'course_description' => 'required|min:2', 
        ];
    }
    public function attributes()
{
    return [
        'course_name' => 'Course Name',
        'course_description' => 'Course Description',
    ];
}
}
