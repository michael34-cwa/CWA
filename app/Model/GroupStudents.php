<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GroupStudents extends Model
{
    protected $table = 'group_students';

    protected $fillable = ['group_id', 'course_id', 'task_id'];


    public function User()
    {
        return $this->belongsToMany('App\User',  'students_groups', 'group_students_id','student_id');
    }

 
    public function getCourse()
    {
      return $this->hasOne('App\Model\Courses', 'id', 'course_id');
    }

    public function getTask()
    {
        return $this->hasOne('App\Model\Tasks', 'id', 'task_id');
    }
}
