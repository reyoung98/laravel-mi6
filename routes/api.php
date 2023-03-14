<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PeopleController;
use App\Http\Controllers\Api\StatusController;
use App\Http\Controllers\Api\MissionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/people/search', [PeopleController::class, 'search']);
Route::get('/statuses', [StatusController::class, 'index']);
Route::get('/missions', [MissionController::class, 'index']);
Route::get('/missions/{missionId}', [MissionController::class, 'show']);
