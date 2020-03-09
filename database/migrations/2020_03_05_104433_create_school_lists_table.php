<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('school_lists', function (Blueprint $table) {
           $table->increments('id');
           $table->integer('school_id')->unsigned();
           $table->foreign('school_id')->references('id')->on('users')->onDelete('cascade');
           $table->string('school_name');
           $table->text('school_description')->nullable();
           $table->text('school_address')->nullable(); 
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
        Schema::dropIfExists('school_lists');
    }
}
