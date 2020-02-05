<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['slug' => 'admin', 'name' => 'admin'],
            ['slug' => 'school', 'name' => 'school'],
            ['slug' => 'teacher', 'name' => 'teacher'],
            ['slug' => 'project_admin', 'name' => 'project_admin'],
            ['slug' => 'student', 'name' => 'student'],
        ];
       
        DB::table('Roles')->insert($roles);

       
    }
}
