<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;


Route::get('/', [ApiController::class, 'index']);
Route::post('/', [ApiController::class, 'store']);
Route::get('/delete/{criteria?}', [ApiController::class, 'delete']);
Route::get('/edit/{criteria?}', [ApiController::class, 'edit']);
Route::post('/edit-action', [ApiController::class, 'update']);
Route::post('/search', [ApiController::class, 'search']);

