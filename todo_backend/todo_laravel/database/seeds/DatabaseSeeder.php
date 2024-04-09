<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Todo;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {

        /* ----------- UNSUPPORTED : Only supports in Larvel v.8 and above ---------------- */
        /* User::factory(10)->create();

        User::factory()->create([
            "id" => 1,
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('pass123'),
        ]);

        // creating Notes data in data base
        Todo::factory(10)->create(); */

         // Create a single user
         User::create([
            "id" => 1,
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('pass123'),
        ]);

        // Create multiple todos
        factory(Todo::class, 10)->create();
    }
}

