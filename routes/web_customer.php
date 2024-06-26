<?php

declare(strict_types=1);

use App\Http\Controllers\Customer\ApplicationController;
use App\Http\Controllers\Customer\EmployerController;
use App\Http\Controllers\Customer\VacancyController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Ну и привет, Customer!';
});

Route::resource('/applications', ApplicationController::class);
Route::resource('/vacancies', VacancyController::class);
Route::resource('/employers', EmployerController::class);

