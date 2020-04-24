<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class TaskLogs extends Model
{
    protected $table = 'task_logs';

    public function User()
    {
        return $this->belongsTo('App\User', 'student_id', 'id');
    }
}
