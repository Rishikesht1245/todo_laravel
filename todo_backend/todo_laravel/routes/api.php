<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


    // Welcome message route
    Route::get('/test', function () {
        return response()->json(['message' => 'Welcome to Todo Application'], 200);
    });

    // Authentication routes
    Route::namespace('Auth')->group(function () {
        Route::get('/csrf-token', 'CsrfController@sendToken')->name('getToken');
        Route::post('/register', 'RegisterController@create')->name('register');
        Route::post('/login', 'LoginController@authenticate')->name('login');
    });

    // Todo CRUD operations
    Route::prefix('/todo')->group(function () {
        Route::get('/all/{id}', 'TodoController@index');
        Route::get('/completed/{user_id}', 'TodoController@completedTodos');
        Route::post('/create', 'TodoController@store');
        Route::get('/{id}', 'TodoController@show');
        Route::put('/{id}', 'TodoController@update');
        Route::patch('/{id}', 'TodoController@changeStatus');
        Route::delete('/{user_id}/{id}', 'TodoController@destroy');
    });
