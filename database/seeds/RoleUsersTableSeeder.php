<?php

use Illuminate\Database\Seeder;

class RoleUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_users = [
            ['user_id' => '1', 'role_id' => '1'],
           
        ];
       
        DB::table('role_users')->insert($role_users);

       
    }
}
