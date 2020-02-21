<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Builder;
// //use Illuminate\Database\Eloquent\SoftDeletes;
// use Illuminate\Contracts\Pagination\Paginator;
// use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Courses extends Model
{
    // use soft delete instead of permanent delete
 //   use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courses';

    protected $fillable = [ 'course_name', 'course_description', 'cat_id', 'is_active'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
   // protected $dates = ['deleted_at', 'published_at'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
  
    /**
     * Load all for admin and paginate
     * 
     */

   public function getCategory()
    {   
    return $this->belongsToMany('App\Model\CourseCategories', 'category_courses', 'course_id', 'cat_id');
     }

     public function getTasks()
    {   
    return $this->hasMany('App\Model\Tasks', 'course_id', 'id');
     }
  
     public function getSchoolCourse()
    {
        return $this->belongsToMany('App\User', 'school_courses', 'course_id', 'school_id');
    }
      public function getStudentCourse()
    {
        return $this->belongsToMany('App\User', 'student_courses', 'course_id', 'student_id');
    }
}
