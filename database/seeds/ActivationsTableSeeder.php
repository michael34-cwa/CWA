<?php

use Illuminate\Database\Seeder;

class ActivationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $active = [
            ['user_id' => '51', 'code' => 'fGRNEkoUmGT5D1kufvnAKcUBduS1Ua2c','completed'=>'1','completed_at'=>'2019-07-15 12:26:46'],
           
        ];
       
        DB::table('activations')->insert($active);

       
    }
}
