<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Vacancy\EmployerController;
use App\Http\Controllers\Vacancy\VacancyController;
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
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/vacancies', VacancyController::class);
Route::get('/vacancies', [VacancyController::class, 'index'])->name('vacancies.list');
Route::resource('/employers', EmployerController::class);
Route::get('/employers', [EmployerController::class, 'index'])->name('employers.list');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
