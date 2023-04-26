<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organizer extends Model
{
    use HasFactory;

    protected $table = "organizers";

    protected $fillable = [
        "first_name",
        "last_name",
        "international_code",
        "birth_date",
        "gender",
        "marriage",
        "job",
        "job_place",
        "education",
        "phone_number",
        "account_number",
        "address",
        "image_url"
    ];
}
