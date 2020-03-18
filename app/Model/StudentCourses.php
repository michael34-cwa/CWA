<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class StudentCourses extends Model
{
    protected $table = 'student_courses';


    protected $fillable = ['student_id', 'course_id', 'project_admin_id', 'school_id', 'status'];



    public function getCourse()
    {
        return $this->hasOne('App\Model\Courses', 'id', 'course_id');
    }
}
