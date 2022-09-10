const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: './public/bundle.[hash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [

            // First Rule
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // Second Rule
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                            sourceMap: true
                        }
                    }
                ]
            },
             // Third Rule
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
            logo192: 'public/logo192.png',
            logo512: 'public/logo512.png',
        })

    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
};