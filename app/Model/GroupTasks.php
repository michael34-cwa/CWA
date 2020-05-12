<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GroupTasks extends Model
{
  public $timestamps = true;

    public function getTask()
    {
      return $this->hasOne('App\Model\Tasks', 'id', 'task_id');
    }

    public function getLogs()
    {
      return $this->hasMany('App\Model\TaskLogs', 'group_task_id', 'id');
    }
}
