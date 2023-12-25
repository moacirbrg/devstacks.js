const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlInlineScriptPlugin = require("html-inline-script-webpack-plugin");
const path = require("path");

const isProduction = process.argv.indexOf('--mode=production') > -1;

const webpack = {
    entry: './src/index.tsx',
    output: {
        clean: true,
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
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
        alias: {
            '@src': path.resolve(__dirname, 'src/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@libs': path.resolve(__dirname, 'src/libs/'),
            '@assets': path.resolve(__dirname, 'assets/')
        },
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inlineSource: '.(js|css)$',
        })
    ],
};

if (!isProduction) {
    webpack.mode = 'development';
    webpack.devtool = 'inline-source-map';
    webpack.watch = true;
}

if (isProduction) {
    webpack.plugins.push(new HtmlInlineScriptPlugin());
}

module.exports = webpack;