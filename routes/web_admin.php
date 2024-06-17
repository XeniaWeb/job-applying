<?php

declare(strict_types=1);

use App\Http\Controllers\Admin\Vacancy\EmployerController;
use App\Http\Controllers\Admin\Vacancy\VacancyController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Ну и привет, Admin!';
});

Route::resource('/vacancies', VacancyController::class);
Route::get('/vacancies', [VacancyController::class, 'index'])->name('vacancies.list');
Route::resource('/employers', EmployerController::class);
Route::get('/employers', [EmployerController::class, 'index'])->name('employers.list');

