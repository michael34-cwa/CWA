<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GroupCourses extends Model
{
    public function getCourse()
    {
      return $this->hasOne('App\Model\Courses', 'id', 'course_id');
    }
  
}
