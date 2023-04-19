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
        Schema::create('organizers', function (Blueprint $table) {
            $table->id();
            $table->string("first_name")->nullable();
            $table->string("last_name")->nullable();
            $table->string("international_code")->nullable();
            $table->string("birth_date")->nullable();
            $table->enum("gender",["male","female"])->nullable();
            $table->enum("marriage",["yes","no","unknown"])->nullable();
            $table->string("job")->nullable();
            $table->string("job_place")->nullable();
            $table->enum("education",["zir_diplom","diplom","kardani","karshenasi","arshad","dr"])->nullable();
            $table->string("phone_number")->nullable();
            $table->string("account_number")->nullable();
            $table->text("address")->nullable();
            $table->string("image_url")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizers');
    }
};
