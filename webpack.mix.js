// MIX
let mix = require('laravel-mix');

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
mix.sass('resources/assets/sass/app.scss', 'public/css');

// REACT
// mix.react('resources/assets/js/app.js', 'public/js');

// VUEJS
// mix.js('resources/assets/js/app.js', 'public/js');

