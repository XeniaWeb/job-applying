<?php

declare(strict_types=1);

use App\Http\Controllers\Admin\CustomerController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Ну и привет, Admin!';
});

Route::resource('/customers', CustomerController::class);

