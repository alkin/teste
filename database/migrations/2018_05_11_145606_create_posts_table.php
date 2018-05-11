<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_name');
            $table->string('user_image');
            $table->string('message');
            $table->string('picture');
            $table->timestamps();
        });

        \App\Post::forceCreate([
            'user_name'    => 'Iron Man',
            'user_image'   => 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b8/b84b9243a23448e1016fee728d6825c634256526_full.jpg',
            'message'      => 'Celebração de fim de ano dos Vingadores =D #teamstark',
            'picture'      => 'https://www.screengeek.net/wp-content/uploads/2017/04/avengers-4.png',
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
