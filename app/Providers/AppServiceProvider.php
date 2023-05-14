<?php

namespace App\Providers;

use Illuminate\Routing\ResponseFactory;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        foreach (glob(app_path()."/Infrastructures/*.php") as $file)
        {
            include_once $file;
        }

        Schema::defaultStringLength(191);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $response = app(ResponseFactory::class);

        $response::macro("success", function($message = null, $data = null) use ($response){
            return $response::json([
                "status" => 1,
                "message" => $message,
                "data" => $data
            ]);
        });

        $response::macro("fail", function($message = null, $data = null) use ($response){
            return $response::json([
                "status" => 0,
                "message" => $message,
                "data" => $data
            ]);
        });
    }
}
