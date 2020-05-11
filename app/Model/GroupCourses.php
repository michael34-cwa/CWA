<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GroupCourses extends Model
{
    public function getCourse()
    {
      return $this->hasOne('App\Model\Courses', 'id', 'course_id');
    }
    
    // public function getTask()
    // {
    //     return $this->hasOne('App\Model\GroupTasks', 'group_course_id', 'id');
    // }

    // public function getTask()
    // {
    //     return $this->hasOneThrough(
    //     'App\Model\Tasks',
    //     'App\Model\GroupTasks',
    //     'id',
    //     'id',
    //     'group_course_id'
    //     )
    // }

    public function getTask()
    {
        return $this->belongsToMany('App\Model\Tasks',  'group_tasks', 'group_course_id','task_id');
    }
    
    public function User()
    {
        return $this->belongsToMany('App\User',  'students_groups', 'group_courses_id','student_id');
    }
  
}
