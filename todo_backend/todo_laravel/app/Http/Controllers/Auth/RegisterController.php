<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class RegisterController extends Controller
{
    /**
     * Register a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {

        // check if user is already existing or not
        // first() -> used to return the first matching record from the database.
        $existinguser = User::where("email", $request->email)->first();

        if($existinguser){
            return response()->json(["message" => "User already exists!"], 400);
        }
        // Validate the request data
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);

        // Create a new user
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

       if($user){
        $responseData = [
            'message' => 'User registered successfully',
            'user' => $user->only(['name', 'email']), // Include only name and email in the response
        ];

         // Return a JSON response
         return response()->json($responseData, 201);
       }

       return response()->json(['message'=>'Something went wrong, Please try again!'], 400);

       
    }
}
