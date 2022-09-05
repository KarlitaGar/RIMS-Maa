<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('singleparents', function (Blueprint $table) {
            $table->id();
            $table->string('residentID');
            $table->string('householdID');
            $table->string('circumstance');
            $table->string('needs');
            $table->string('resources');
            $table->string('assessment');
            $table->string('recommendation');
            $table->string('action');
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
        Schema::dropIfExists('singleparents');
    }
};
