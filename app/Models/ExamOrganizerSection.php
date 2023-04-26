<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamOrganizerSection extends Model
{
    use HasFactory;

    protected $table = "exams_organizers_sections";

    protected $fillable = [
        "organizers_id",
        "exam_shift_id",
        "role_id",
        "sub_area_id",
        "sub_area_section"
    ];
}
