<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamShift extends Model
{
    use HasFactory;

    protected $table = "exams_shifts";

    protected $fillable = [
        "organizers_id",
        "exam_shift_id",
        "role_id",
        "sub_area_id",
        "sub_area_section_id",
    ];
}
