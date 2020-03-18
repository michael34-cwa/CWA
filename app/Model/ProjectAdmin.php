<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ProjectAdmin extends Model
{
    protected $table = 'project_admins';
    // public $timestamps = false;

    protected $fillable = ['school_id', 'project_admin_id', 'created_by'];


    public function User()
    {
        return $this->belongsTo('App\User', 'project_admin_id', 'id');
    }

    public function ActivationsUser()
    {
        return $this->hasOne('App\Model\Activations', 'user_id', 'project_admin_id');
    }
}
