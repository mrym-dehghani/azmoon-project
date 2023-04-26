<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubAreaSection extends Model
{
    use HasFactory;

    protected $table = "sub_areas_sections";

    protected $fillable = [
        "name",
        "place",
        "capacity",
        "sub_area_id"
    ];
}
