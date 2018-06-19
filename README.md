# laravel-mix-starter

## Introduction
    this demo is based on laravel-mix and its using ejs-compiled-loader to compile ejs files.
    other functionality and document should work as laravel-mix documantation.

## Instalattion
    npm install

## To run with live reload
    npm run hot

## Generate production build
    npm run prod

## Add New Html File

    new HtmlWebpackPlugin({
        template: "ejs-compiled-loader!./src/index.ejs",
        filename: "index.html",
        inject: false
    })

    this will generate index.html file in dist folder and header/footer will be included, please check index.ejs file content.

## Include html file
    we can use standerd ejs syntex
    <% include /src/include/header.ejs %>

## app.scss
    this file includes bootstrap directly from node_modules