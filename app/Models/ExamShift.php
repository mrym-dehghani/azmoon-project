<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ExamShift extends Model
{
    use HasFactory;

    protected $table = "exams_shifts";

    protected $fillable = [
        "name",
        "hold_date",
        "turn",
        "num_of_areas",
        "exam_id",
    ];

    public function exam()
    {
        return $this->belongsTo(Exam::class, "exam_id");
    }

    public function organizers_info(): HasMany //main organizers for shift
    {
        return $this->hasMany(ExamOrganizerInfo::class, "exam_shift_id");
    }

    public function organizers_section() //organizer for every section of area in shift
    {
        return $this->hasMany(ExamOrganizerSection::class, "exam_shift_id");
    }


}
