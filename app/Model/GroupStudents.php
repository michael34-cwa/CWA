<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GroupStudents extends Model
{
    public function User()
    {
        return $this->belongsTo('App\User', 'student_id', 'id');
    }
}
