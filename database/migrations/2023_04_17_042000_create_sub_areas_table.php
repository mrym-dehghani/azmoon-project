<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sub_areas', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->unsignedBigInteger("main_area_id");
            $table->timestamps();

            $table->foreign("main_area_id")->references("id")->on("main_areas")
                ->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sub_areas');
    }
};
