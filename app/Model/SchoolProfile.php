<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SchoolProfile extends Model
{
    protected $table = 'school_profiles';
   // public $timestamps = false;

    protected $fillable = ['school_id', 'school_admin_id','created_by'];


    public function User()
    {
        return $this->belongsTo('App\User', 'school_id', 'id');
    }

    public function ActivationsUser()
    {
        return $this->hasOne('App\Model\Activations','user_id','school_id');
    }

}
