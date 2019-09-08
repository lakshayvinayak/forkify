const path = require("path");
const dist = path.resolve(__dirname,"dist");
const src = path.resolve(__dirname,"src");
module.exports = {
    entry: src + "/js/index.js",
    output: {
        path: dist,
        filename: "./js/bundle.js"
    },
    devServer:{
        contentBase: dist,
        port: 8080,
        open:true
    }
};