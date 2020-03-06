<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SchoolList extends Model
{
    public $timestamps = true;

    protected $table = 'school_lists';

    protected $fillable = [ 'school_name', 'phone', 'school_description', 'is_active', 'school_address', 'created_at', 'updated_at'];
}
