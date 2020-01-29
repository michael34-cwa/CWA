<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
      protected $table = 'roles';
      
     public static function getAllRoles()
    {
      return  $townsByCounty = Roles::get();
       
    }
}
