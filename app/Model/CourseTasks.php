<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CourseTasks extends Model
{
    protected $table = 'course_tasks';
 


    protected $fillable = ['course_id', 'task_id', 'school_id', 'student_id', 'created_by'];



    public function getTask()
    {
        return $this->hasOne('App\Model\Tasks', 'id', 'task_id');
    }
}
