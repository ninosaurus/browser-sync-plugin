const path = require("path");
const BrowserSyncPlugin = require("@fishingbooker/browser-sync-plugin");
const webpack = require("webpack");

const ignorePlugin = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);
const url = "www.google.com";
const browserSyncPlugin = new BrowserSyncPlugin({url});

const componentName = "related-charters";
const publicFolderRelativePath = "../../../public/js";

module.exports = {
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, publicFolderRelativePath),
        filename: componentName
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    stats: {
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: true
    },
    cache: true,
    watch: false,
    performance: {
        hints: "warning"
    },
    plugins: [browserSyncPlugin, ignorePlugin, new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    })]
};