<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamOrganizerInfo extends Model
{
    use HasFactory;

    protected $table = "exams_organizers_info";

    protected $fillable = [
        "organizers_id",
        "exam_shift_id",
        "role_id",
        "sub_area_id",
    ];
}
