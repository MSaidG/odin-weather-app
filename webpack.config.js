require('@dotenvx/dotenvx').config()

const path = require("path")
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    devtool: "inline-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
        new NodePolyfillPlugin(),
        // new Dotenv({
        //     safe: true,
        // }),
        new webpack.DefinePlugin({
            "process.env.GIPHY_API_KEY": JSON.stringify(process.env.GIPHY_API_KEY),
            "process.env.WEATHER_API_KEY": JSON.stringify(process.env.WEATHER_API_KEY)
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};