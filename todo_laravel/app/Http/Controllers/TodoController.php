<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $todos = Todo::orderBy("created_at", "desc")->where("user_id", Auth::id())->get();
        if($todos->isEmpty()){
            return response()->json(["message"=>"No todo found"], 404);
        }
    
        return response()->json(["message" => "Todos fetched!", "todos"=> $todos], 200);
    }
    
    /**
     * Creating the new todo
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validating data 
        $request->validate([
            "todo" => "required|string|min:4"
        ]);

        $todo = Todo::create([
            'user_id' => $request->user_id,
            'todo' => $request->todo,
        ]);

        if($todo){
            return response()->json(["message" => "Todo created successful!"],201);
        }  

        return response()->json(["message"=> "Something went wrong, Please try again", 400]);

    }

  

    /**
     * Display the specified resource.
     *
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $todo = Todo::find($id);

        if($todo->user_id != Auth::id()){
            return response()->json(["message" => "Unauthorized to view the todo"], 401);
        }

        return response()->json(["message" => "Todo fetched", "todo" => $todo], 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $todo = Todo::find($id);

        if(!$todo){
            return response()->json(["message"=> "No todo found!"], 404);
        }

        if($todo->user_id != Auth::id()){
            return response()->json(["message" => "Unauthorized to update the todo"], 401);
        }

        $data = $request->validate(['todo'=> 'string|required']);
        $todo->update($data);

        return response()->json(["message" => "Todo updated successful!"], 200);
    }


    /**
     * Mark the todo as finished
     *
     * @param $id
     * @return \Illuminate\Http\Response
     */

     public function markCompleted($id){
        $todo = Todo::find($id);

        if(!$todo){
            return response()->json(["message"=> "Todo not found"], 404);
        }

        $todo->is_finished = true;
        $todo->save();

        return response()->json(["message" => "Todo marked as finished"], 200);
     }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        //
    }
}
