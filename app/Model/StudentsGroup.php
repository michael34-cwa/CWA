<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class StudentsGroup extends Model
{
    protected $table = 'students_groups';


    public function getStudentCourse()
    {
        return $this->hasOneThrough(
        'App\Model\Courses',
        'App\Model\GroupCourses',
        'id',
        'id',
        'group_courses_id',
        'course_id');
    }

    // public function getStudentCourse()
    // {
    //     return $this->hasOne(
    //     'App\Model\Courses', 
    // }


    
    public function getCourseTasks()
    {
        return $this->hasOneThrough(
        'App\Model\Tasks',
        'App\Model\GroupStudents',
        'id',
        'id',
        'group_students_id',
        'task_id');
    }


    public function getCategory()
    {
        return $this->hasManyThrough(
        'App\Model\CategoryCourses',
        'App\Model\GroupCourses',
        'id',
        'course_id',
        'group_courses_id',
        'course_id');
    }


    // public function getCourse()
    // {
    //     return $this->hasOne('App\Model\GroupStudents','id','group_students_id');
    // }
}
