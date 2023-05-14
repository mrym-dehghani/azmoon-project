<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrganizersFactorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $organizersFactor = [
            "job" => [
                "بیکار",
                "دانشجو",
                "کارمند",
                "آزاد",
                "بازنشسته",
            ],
            "job_place" => [
                "دانشگاه شیراز",
                "سایر دانشگاه ها",
                "ادارات دولتی",
                "شرکت های دولتی",
                "شرکت های خصوصی",
                "سایر",
            ],
            "education" => [
                "زیر دیپلم",
                "دیپلم",
                "کارشناسی",
                "کاردانی",
                "ارشد",
                "دکترا"
            ]
        ];

        Setting::create([
            "key" => "OrganizersFactors",
            "value" => $organizersFactor
        ]);
    }
}
