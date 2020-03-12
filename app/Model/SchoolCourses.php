<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SchoolCourses extends Model
{

    protected $table = 'school_courses';
    public $timestamps = false;

    protected $fillable = ['school_id', 'course_id'];

    public function getCourse()
    {
        return $this->hasOne('App\Model\Courses', 'id', 'course_id');
    }
}
