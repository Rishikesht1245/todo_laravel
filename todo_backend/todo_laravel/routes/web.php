<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('/api')->group(function () {
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
        Route::get('/completed', 'TodoController@completedTodos');
        Route::post('/create', 'TodoController@store');
        Route::get('/{id}', 'TodoController@show');
        Route::put('/{id}', 'TodoController@update');
        Route::patch('/{id}', 'TodoController@changeStatus');
        Route::delete('/{id}', 'TodoController@destroy');
    });
});

// Home route
Route::get('/home', 'HomeController@index')->name('home');
