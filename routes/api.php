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
                                        //api/user
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/people/search', [PeopleController::class, 'search']);
Route::get('/statuses', [StatusController::class, 'index']);
Route::get('/missions', [MissionController::class, 'index']);
Route::get('/missions/{missionId}', [MissionController::class, 'show']);
Route::post('/missions/store', [MissionController::class, 'store']);

// Email routes
Route::get('/send-test-email', [PeopleController::class, 'sendTestEmail']);
Route::get('/send-mission-details/{missionId}', [MissionController::class, 'sendMissionDetails']);
