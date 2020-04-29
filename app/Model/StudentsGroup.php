<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class StudentsGroup extends Model
{
    protected $table = 'students_groups';

    protected $fillable = ['group_id', 'course_id', 'task_id'];

}
