<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Resume\ResumeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/cv/ru', [ResumeController::class, 'showCvRu'])->name('cv.ru');
Route::get('/cv/en', [ResumeController::class, 'showCvEn'])->name('cv.en');
Route::get('/cv/de', [ResumeController::class, 'showCvDe'])->name('cv.de');
Route::resource('/cv', ResumeController::class);
Route::get('/pdf', [ResumeController::class, 'downloadPdf'])->name('download_pdf');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
