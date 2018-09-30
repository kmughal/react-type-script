const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlTemplateGenerator = require('html-webpack-plugin');

const outFolderName = "dist";

module.exports = {
    entry: {
        app: './src/app.tsx',
        index: './src/index.ts'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.ts|tsx$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: "node",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlTemplateGenerator({
            title: 'Test react app',
            template: './src/index.html',
            "filename": "index.html",
        })
    ]
};