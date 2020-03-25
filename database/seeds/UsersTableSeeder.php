<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 50)->create();

        \App\User::create([
            'name' => 'Dev Admin',
            'first_name' => 'Dev',
            'last_name' => 'admin',
            'email' => 'admin@yopmail.com',
            'password' => bcrypt('123456'),
            'is_admin' => true,
            'remember_token' => Str::random(10),
        ]);
    }
}
