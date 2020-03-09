<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SchoolList extends Model
{
    public $timestamps = true;

    protected $table = 'school_lists';

    protected $fillable = [ 'school_name', 'school_description', 'school_address', 'created_at', 'updated_at'];

    public function User()
    {
     return $this->belongsTo('App\User','school_id','id');
    }


        public function ActivationsUser()
    {
        return $this->hasOne('App\Model\Activations','user_id','school_id');
    }
}
