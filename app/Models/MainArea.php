<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MainArea extends Model
{
    use HasFactory;

    protected $table = "main_areas";

    protected $fillable = [
        "name",
    ];
}
