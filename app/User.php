<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      
        'email',
        'password',
        'first_name',
        'last_name',
        'phone',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 
    ];

 

       static function GetUserByMail($email)
    { 
        return  static::whereEmail($email)->first();

    }
    /**
     * The relation between user and articles
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function articles(): HasMany
    {
        return $this->hasMany(Article::class);
    }

      public function roles()
    {
        return $this->belongsToMany('App\Model\Roles', 'role_users', 'user_id', 'role_id');
    }



        public function ActivationsUser()
    {
        return $this->hasOne('App\Model\Activations');
    }

          public function SchoolLists()
    {
        return $this->hasOne('App\Model\SchoolList' ,'school_id', 'id');
    }

    public function SchoolAdmin()
    {
        return $this->hasOne('App\Model\SchoolProfile', 'school_id', 'id');
    }

    public function SchoolTeacher()
    {
        return $this->hasOne('App\Model\TeacherProfiles', 'teacher_id', 'id');
    }
}
