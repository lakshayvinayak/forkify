const path = require("path");
const dist = path.resolve(__dirname,"dist");
const src = path.resolve(__dirname,"src");
var HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: [
        "@babel/polyfill",
        src + "/js/index.js"
    ],
    output: {
        path: dist,
        filename: "./js/bundle.js"
    },
    devServer:{
        contentBase: dist,
        port: 8080,
        open:true
    }
    ,
    plugins:[new HTMLWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html"
    })],
    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    }
};