<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Chats extends Model
{
    protected $table = 'chats';

    public function Sender()
    {
        return $this->hasOne('App\User', 'id', 'sender_id');
    }

    public function Receiver()
    {
        return $this->hasOne('App\User', 'id', 'receiver_id');
    }
}
