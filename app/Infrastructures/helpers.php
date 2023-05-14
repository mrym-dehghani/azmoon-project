<?php

use Intervention\Image\Facades\Image;

function makeImage($image, $square = false, $h = 500, $w = 500)
{
    $width = $w;
    $height = $h;

    if($square)
    {
        $width = 500;
        $height = 500;
    }

    $canvas = Image::canvas($width,$height,"#fff");

    $img = Image::make($image)->encode("webp",100);

    $img->height() > $img->width() ? $width=null : $height=null;

    $img->resize($width, $height, function ($constraint) {
        $constraint->aspectRatio();
    });

    $canvas->insert($img, "center");

    return $canvas;
}

function cropImage($image,$width = 340,$height = 550)
{
    $img = Image::make($image->getRealPath())->encode("webp",100);

    $img->fit($width);

    //$img->crop($width,$height);

    $img->insert("./assets/img/watermark.png","bottom-left",15,10);

    return $img;
}

function makeOriginalImage($image)
{
    $img = Image::make($image->getRealPath())->encode("webp",100);

    //$img->insert("./assets/img/watermark.png","bottom-left",35,10);

    return $img;
}

function makeHighResolutionImage($image)
{
    $canvas = Image::canvas(1920,1080,"#000");

    $img = Image::make($image->getRealPath())->encode("webp",100);

    $width = 1920;

    $height = 1080;

    $img->height() > $img->width() ? $width=null : $height=null;

    $img->resize($width, $height, function ($constraint) {
        $constraint->aspectRatio();
    });

    $img->insert("./assets/img/watermark.png","bottom-left",35,10);

    $canvas->insert($img, "center");

    return $canvas;
}

function watermark($image)
{
    $img = Image::make($image->getRealPath());

    $img->insert("./assets/img/watermark.png","bottom-left",35,10);

    return $img;
}

function makeThumbnail($img,$square = false, $h = 240, $w = 160)
{
    $width = $w;
    $height = $h;

    if($square)
    {
        $width = 225;
        $height = 225;
    }

    $img->resize($width, $height, function ($constraint) {
        $constraint->aspectRatio();
    });

    return $img;
}

function convertBase64ToImage($imageString)
{
    $base64Image = explode(";base64,", $imageString);
    $explodeImage = explode("image/", $base64Image[0]);
    $imageType = $explodeImage[1];
    return $image_base64 = base64_decode($base64Image[1]);
}