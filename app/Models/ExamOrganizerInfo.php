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

    public function role()
    {
        return $this->belongsTo(Role::class, "role_id");
    }

    public function organizer()
    {
        return $this->belongsTo(Organizer::class, "organizers_id");
    }
}
