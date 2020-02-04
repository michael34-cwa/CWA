<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function(Blueprint $table){
           $table->increments('id');
           $table->string('course_name');
           $table->text('course_description')->nullable();
           $table->text('course_categories')->nullable();
           $table->boolean('is_active')->default(false);
           $table->boolean('published')->default(false);
           $table->timestamp('published_at')->nullable();
           $table->softDeletes();
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
        Schema::dropIfExists('courses');
    }
}
