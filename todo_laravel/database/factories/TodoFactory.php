<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Todo;
use Faker\Generator as Faker;

$factory->define(Todo::class, function (Faker $faker) {
    return [
        // Generate a random text for the todo
        'todo' => $faker->realText(20),
        // Set user_id to 1 for now (you might want to change this later)
        'user_id' => 1,
    ];
});
