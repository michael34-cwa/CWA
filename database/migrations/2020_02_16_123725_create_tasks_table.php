<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function(Blueprint $table){
           $table->increments('id');
           $table->string('task_name');
           $table->text('task_description')->nullable();
           $table->integer('course_id')->unsigned();
           $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
           $table->boolean('is_active')->default(false);
           $table->text('link')->nullable();
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
        Schema::dropIfExists('tasks');
    }
}
