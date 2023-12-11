const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlInlineScriptPlugin = require("html-inline-script-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.png/,
                type: 'asset/inline'
            },
            {
                test: /\.woff2/,
                type: 'asset/inline'
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inlineSource: '.(js|css)$',
        }),
        new HtmlInlineScriptPlugin()
    ],
};