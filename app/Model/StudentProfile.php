<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class StudentProfile extends Model
{
    protected $table = 'student_profiles';


    protected $fillable = ['school_id', 'student_id', 'created_by'];


    public function User()
    {
        return $this->belongsTo('App\User', 'student_id', 'id');
    }

    public function ActivationsUser()
    {
        return $this->hasOne('App\Model\Activations', 'user_id', 'student_id');
    }
}
