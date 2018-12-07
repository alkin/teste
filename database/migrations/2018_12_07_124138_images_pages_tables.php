<?php

use App\Image;
use App\Quote;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ImagesPagesTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image');
            $table->timestamps();
        });

        Image::forceCreate([
            'image' => 'https://cdn.vox-cdn.com/thumbor/UwqYF-GIbz8mLjiyY1wAwKty8tw=/144x0:1764x1080/1200x800/filters:focal(144x0:1764x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/45818832/the_hobbit_the_desolation_of_smaug_1920x1080_by_sachso74-d7sr1wl.0.0.jpg',
        ]);

        Schema::create('quotes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('text');
            $table->string('author');
            $table->timestamps();
        });

        Quote::forceCreate([
            'text'   => 'Extraordinary claims require extraordinary evidence',
            'author' => 'Carl Sagan',
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
    }
}
