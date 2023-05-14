<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    use HasFactory;

    protected $table = "exams";

    protected $fillable = [
        "name",
        "num_of_shifts",
        "has_finished"
    ];

    public function shifts()
    {
        return $this->hasMany(ExamShift::class,"exam_id");
    }
}
