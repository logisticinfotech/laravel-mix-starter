let mix = require('laravel-mix');
let HtmlWebpackPlugin = require('html-webpack-plugin')
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

mix
    .js('src/js/app.js', 'dist/js')
    .sass('src/sass/app.scss', 'dist/css');

mix.styles([
    'scr/vendor/animate/animate.css',
    'scr/vendor/dataTables/datatabkes.min.css',
    'scr/vendor/font-awesome/css/font-awesome.min.css',
    'scr/vendor/font-awesome/css/font-awesome.min.css',
], 'dist/css/vendor.css');

// mix.sourceMaps();
mix.setPublicPath('dist');
mix.copyDirectory('src/img', 'dist/img');

mix.disableNotifications();

mix.webpackConfig({
    output: {
        // path: path.join(__dirname, 'dist'),
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({template: "ejs-compiled-loader!./src/index.ejs", filename: "index.html", inject: true}),
        new HtmlWebpackPlugin({template: "ejs-compiled-loader!./src/about-us.ejs", filename: "about-us.html", inject: true}),
        new HtmlWebpackPlugin({template: "ejs-compiled-loader!./src/contact-us.ejs", filename: "dist/contact-us.html"})
    ],
    devServer: {
        //hot: true, inline: true, contentBase: __dirname
        disableHostCheck: false,
        watchContentBase: true,
        host: "0.0.0.0"
        //port: 8082,
    }
});
