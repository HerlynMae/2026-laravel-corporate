<?php

use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

// Employee CRUD routes - all require auth
Route::resource('employees', EmployeeController::class)->middleware('auth');
Route::resource('roles', RoleController::class)->middleware('auth');
Route::resource('departments', DepartmentController::class)->middleware('auth');
Route::resource('projects', ProjectController::class)->middleware('auth');
Route::resource('tasks', TaskController::class)->middleware('auth');

require __DIR__ . '/settings.php';
