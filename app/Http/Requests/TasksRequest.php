<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TasksRequest extends FormRequest
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
        'task_name' => 'required|min:2', 
        'task_description' => 'required|min:2'
        ];
    }
    public function attributes()
{
    return [
        'category_name' => 'Task Name',
        'task_description' => 'Task Description',
    ];
}
}
