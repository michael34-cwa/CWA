<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class TeacherProfiles extends Model
{
    protected $table = 'teacher_profiles';
   

    protected $fillable = ['school_id','teacher_id', 'created_by'];


    public function User()
    {
        return $this->belongsTo('App\User', 'teacher_id', 'id');
    }

    public function ActivationsUser()
    {
        return $this->hasOne('App\Model\Activations', 'user_id', 'teacher_id');
    }

}
