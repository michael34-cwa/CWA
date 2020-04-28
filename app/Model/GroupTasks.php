<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GroupTasks extends Model
{
    public function getTask()
    {
      return $this->hasOne('App\Model\Tasks', 'id', 'task_id');
    }
}
