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
           $table->string('school_name');
           $table->string('phone');
           $table->text('school_description')->nullable();
           $table->text('school_address')->nullable();
           $table->boolean('is_active')->default(false);
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
