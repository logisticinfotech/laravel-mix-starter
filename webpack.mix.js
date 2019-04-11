let mix = require("laravel-mix");
let HtmlWebpackPlugin = require("html-webpack-plugin");
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

mix.js("src/js/app.js", "dist/js");

mix.combine(
    [
        "src/vendor/dataTables/datatables.min.js",
        "src/vendor/jqueryui/jquery-ui.min.js",
        "src/vendor/sweetalert/sweetalert.min.js",
        "src/vendor/validate/jquery.validate.min.js"
    ],
    "dist/js/vendor.js"
);

mix.combine(
    [
        "src/vendor/animate/animate.css",
        "src/vendor/dataTables/datatables.min.css",
        "src/vendor/font-awesome/css/font-awesome.min.css",
        "src/vendor/jqueryui/jquery-ui.min.css",
        //"src/vendor/sweetalert/sweetalert.css"
    ],
    "dist/css/vendor.css"
).options({
    processCssUrls: false
});

mix.sass("src/sass/app.scss", "dist/css");

mix.copyDirectory("src/vendor/font-awesome/fonts", "dist/fonts");
mix.copyDirectory("src/fonts/", "dist/fonts");

// mix.sourceMaps();
mix.setPublicPath("dist");
mix.copyDirectory("src/images", "dist/images");

mix.disableNotifications();

mix.webpackConfig({
    output: {
        // path: path.join(__dirname, 'dist'),
        publicPath: ""
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/index.ejs",
            filename: "index.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/about-us.ejs",
            filename: "about-us.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/contact-us.ejs",
            filename: "contact-us.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/datatable-demo.ejs",
            filename: "datatable-demo.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/font-awesome.ejs",
            filename: "font-awesome.html",
            inject: false
        })
    ],
    devServer: {
        //hot: true, inline: true, contentBase: __dirname
        disableHostCheck: false,
        watchContentBase: true,
        host: "0.0.0.0",
        open: true
        //port: 8082,
    }
});
