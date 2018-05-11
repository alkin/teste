// Frontend Framework: vue, react, angular
const frontend = 'react';

// CSS Framework: semantic, bootstrap
const css = 'semantic';

// MIX
let mix = require('laravel-mix');
const webpack = require('webpack');

const config = {
    plugins: [
        new webpack.DefinePlugin({
            'BUILD': {
                frontend: JSON.stringify(frontend),
                css: JSON.stringify(css),
            },
        }),
    ],
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

if (frontend == 'react') {
    mix.react('resources/assets/js/app.js', 'public/js');
} else {
    mix.js('resources/assets/js/app.js', 'public/js');
}
