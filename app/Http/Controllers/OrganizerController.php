<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewOrganizerRequest;
use App\Models\Organizer;
use App\Models\Setting;
use Illuminate\Http\Request;

class OrganizerController extends Controller
{
    public function GetOrganizersFactors()
    {
        $organizersFactors = Setting::Get(Setting::ORGANIZERS_FACTORS);

        Setting::Set("",[]);

        return response()->success("",$organizersFactors);
    }

    public function StoreNewOrganizer(NewOrganizerRequest $request)
    {
        $validatedData = $request->validated();

        $image = $request->get("image");
        $image = convertBase64ToImage($image);

        if($image)
        {
            $imageName = "profile".rand(10000,99999).time();
            $imageUploadUrl = "./uploads/profiles/".$imageName.".webp";

            $imageResult = makeImage($image);

            $imageResult->save($imageUploadUrl);

            if(!file_exists($imageUploadUrl))
            {
                return response()->fail("آپلود تصویر پروفایل موفقیت آمیز نبود.");
            }

            $validatedData["image_url"] = $imageUploadUrl;
        }

        Organizer::create($validatedData);

        return response()->success("کاربر جدید با موفقیت ایجاد شد.");
    }
}
