<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class TeacherProfiles extends Model
{
    protected $table = 'teacher_profiles';
   

    protected $fillable = ['teacher_id', 'created_by'];
}
