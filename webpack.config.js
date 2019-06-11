const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'scss', 'css'],
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.tsx$/, loader: 'awesome-typescript-loader' },
            { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    devServer: {
        port: 80
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};