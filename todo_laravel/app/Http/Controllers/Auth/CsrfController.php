<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

Class CsrfController extends Controller{

    public function sendToken(Request $request){
        $token = $request->session()->token();
        return response()->json(["token"=> $token]);
    }
}