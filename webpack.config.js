const path = require("path");
const dist = path.resolve(__dirname,"dist");
const src = path.resolve(__dirname,"src");
module.exports = {
    entry: src + "/js/index.js",
    output: {
        path: dist + "/js/",
        filename: "bundle.js"
    }
};