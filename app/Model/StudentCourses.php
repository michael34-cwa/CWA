<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class StudentCourses extends Model
{
    protected $table = 'student_courses';


    protected $fillable = ['student_id', 'course_id', 'project_admin_id', 'school_id', 'status'];

    public function getStudentCourse()
    {
        return $this->hasOne('App\Model\Courses', 'id','course_id');

    }

    public function getCategory()
    {
      //  return $this->belongsToMany('App\Model\CourseCategories', 'category_courses', 'course_id', 'cat_id');
 //    return $this->hasMany('App\Model\CategoryCourses', 'course_id','course_id');

       return $this->belongsToMany('App\Model\CourseCategories', 'category_courses', 'course_id', 'cat_id','course_id');

    }

    public function getCourse()
    {
        return $this->hasOne('App\Model\Courses', 'id', 'course_id');
    }


    public function getCourseTasks()
    {   
    return $this->belongsToMany('App\Model\Tasks', 'course_tasks','student_corse_id', 'task_id')->withPivot(['id','school_id','status','description']);
     }
 
}
