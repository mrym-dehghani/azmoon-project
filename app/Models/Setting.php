<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    const ORGANIZERS_FACTORS = "OrganizersFactors";

    protected $table = "settings";

    protected $fillable = [
        "key",
        "value"
    ];

    protected $casts = [
        "value" => "array"
    ];

    public static function Get($key)
    {
        return self::query()->where("key",$key)->first()->value;
    }

    public static function Set($key, $value)
    {
        self::query()->where("key",$key)->update([
            "value" => $value
        ]);
    }
}
