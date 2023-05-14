<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizerController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\AreaController;
use App\Http\Controllers\SettingController;

Route::get("/organizers/organizers_factors",[OrganizerController::class, "GetOrganizersFactors"]);
Route::post("/organizers/new",[OrganizerController::class,"StoreNewOrganizer"]);

//Route::name("admin.")->group(function (){
//    Route::resource("organizers",OrganizerController::class);
//    Route::resource("exams",ExamController::class);
//    Route::resource("areas",AreaController::class);
////    Route::get("settings",SettingController::class);
//});

Route::put("/organizers/{exam_id}/{area_id}",function(){
    return view("welcome");
});

// /organizers (get) list organizers
// /organizers_list (post)
// /organizers (post) new organizer
// /organizers/{id} (put) update
// /organizers/{id} (get) organizers data
// /organizers/{id} (delete) delete

// /exams (post) 
// /exams/{id} (get)
// /exams/{id} (put)

Route::get('/{path?}',function(){
    return view('welcome');
});
