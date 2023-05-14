<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubArea extends Model
{
    use HasFactory;

    protected $table = "sub_areas";

    protected $fillable = [
        "main_area_id",
        "name"
    ];

    public function main_area()
    {
        return $this->belongsTo(MainArea::class, "main_area_id");
    }

    public function sections()
    {
        return $this->hasMany(SubAreaSection::class, "sub_area_id");
    }
}
