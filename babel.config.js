const presets = [
    [
        "@babel/preset-env",
        {
            targets:{
                "browsers":[
                    "last 5 version",
                    "ie >= 8",

                ]
            },
            useBuiltIns: "usage"
        }
    ]
];
module.exports = {presets};