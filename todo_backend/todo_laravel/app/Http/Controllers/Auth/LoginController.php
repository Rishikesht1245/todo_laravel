<?php
 
namespace App\Http\Controllers\Auth;
 
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
 
class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');


 
        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return response()->json(['message' => "Login Successful!", "user" => Auth::user()], 200);
        }
        return response()->json(["message" => "Invalid Credentials"],401);
    }
}