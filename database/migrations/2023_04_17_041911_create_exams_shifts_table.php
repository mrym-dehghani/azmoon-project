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
        Schema::create('exams_shifts', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->date("hold_date");
            $table->enum("turn",["afternoon","morning"])->default("morning");
            $table->integer("num_of_areas");
            $table->unsignedBigInteger("exam_id");
            $table->timestamps();

            $table->foreign("exam_id")->references("id")
                ->on("exams")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exams_shifts');
    }
};
