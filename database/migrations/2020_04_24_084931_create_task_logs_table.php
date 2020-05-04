<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaskLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::create('task_logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('group_student_id')->unsigned();
            // $table->foreign('group_student_id')->references('id')->on('group_students')->onDelete('cascade');
              $table->integer('student_id')->unsigned();
            // $table->foreign('student_id')->references('id')->on('users')->onDelete('cascade');
            // $table->integer('task_id')->unsigned();
            // $table->foreign('task_id')->references('id')->on('tasks');
            $table->string('start_time');
            $table->string('end_time');
            $table->text('vid_disc')->nullable();
            $table->boolean('status')->enum('0', '1');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('task_logs');
    }
}
