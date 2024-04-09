<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTodosTable extends Migration
{

    protected $fillable = [
        'user_id', // Add 'user_id' to the fillable array
        'todo',
    ];
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            // Use increments() instead of id()
            $table->increments('id');
            // longtext is the datatype and note is the column name
            $table->longText('todo');
            // Use unsignedBigInteger() instead of foreignId() : unsupported in laravel 5.8
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            // Set the default value of is_finished to false : 0
            $table->boolean('is_finished')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todos');
    }
}
