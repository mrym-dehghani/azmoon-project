<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizerController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\AreaController;
use App\Http\Controllers\SettingController;

Route::middleware("")->group(function (){
    Route::resource("organizers",OrganizerController::class);
    Route::resource("exams",ExamController::class);
    Route::resource("areas",AreaController::class);
    Route::get("settings",SettingController::class);
});

Route::get('/{path?}',function(){
    return view('welcome');
});
