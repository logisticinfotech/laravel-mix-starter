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

mix.js('src/js/app.js', 'dist/js')
   .sass('src/sass/app.scss', 'dist/css');

// mix.sourceMaps();
mix.setPublicPath('dist');
mix.copyDirectory('src/img', 'dist/img');
// mix.copy('src/index.html', 'dist/index.html');
// mix.copy('src/example.ejs', 'dist/example.html');
// mix.copy('ejs-compiled-loader!./src/example2.ejs', 'dist/example2.html');
// mix.copy('src/example2.ejs', 'dist/example2.html');
mix.disableNotifications();
//TODO make working browsersync
// if(process.env.ISHOT === true) {
//     mix.browserSync({
//         proxy: 'localhost:8080',
//         // port: 8000,
//         files: [
//             'dist/css/{*,**/*}.css',
//             'dist/js/{*,**/*}.js',
//             'dist/*.html',
//         // 'templates/{*,**/*}.html.twig'
//         ]
//     });
// }
mix.webpackConfig({
    output: {
        // path: path.join(__dirname, 'dist'),
        publicPath: '',
    },
    // module: {
    //     rules: [
    //       {
    //         test: /\.ejs$/,
    //         loader: 'ejs-compiled-loader',
    //       }
    //     ]
    //   }
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: "ejs-compiled-loader!./src/example1.ejs",
        //     filename: "dist/example1.html"
        // }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/example2.ejs",
            filename: "example2.html",
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/index.ejs",
            filename: "index.html",
            inject: true
        })
    ],
    devServer: {
    //     hot: true,
        // inline: true,
    //    contentBase: __dirname
        watchContentBase: true,
        host: "192.168.0.2"
    //     port: 8082,
    //     watchOptions: {
    //         poll: true
    //     }
    }
});
// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
