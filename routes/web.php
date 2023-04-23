<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
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
