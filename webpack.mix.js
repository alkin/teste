let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


const config = {
    resolve: {
        alias: {
            // Project's Home Folder
            '~': path.resolve(__dirname),
            // JS Home Folder
            '@': path.resolve(__dirname, 'resources/assets/js'),
        },
    },

};

mix.webpackConfig(config);

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
