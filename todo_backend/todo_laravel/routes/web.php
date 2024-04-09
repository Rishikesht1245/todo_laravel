<?php

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

Route::get('/', function () {
    return response()->json(['message' => "Welcome to Todo Application"],200);
});


// this is for scaffolded by make:auth and Auth::Routes contains all the routes for authentication
// Auth::routes();

Route::namespace("Auth")->group(function(){
    Route::get("/csrf-token", "CsrfController@sendToken")->name("getToken");
    Route::post("/register", "RegisterController@create")->name("register");
    Route::post("/login", "LoginController@authenticate")->name("login");
});

// Todo Crud operations
Route::prefix("/todo")->group(function(){
    // view all todo
    Route::get("/all", "TodoController@index");
    // View all completed todos
    Route::get("/completed", "TodoController@completedTodos");
    // create todo
    Route::post("/create", "TodoController@store");
    // view single todo
    Route::get("/{id}", "TodoController@show");
    // update todo
    Route::put("/{id}", "TodoController@update");
    // Mark status completed
    Route::patch("/{id}", "TodoController@changeStatus");
    // Delete the todo
    Route::delete("/{id}", "TodoController@destroy");


});

Route::get('/home', 'HomeController@index')->name('home');
