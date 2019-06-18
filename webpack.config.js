var path = require('path');
module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        filename: "App.js",
        path: path.resolve(__dirname, "./app/temp/scripts")
        
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                },
                test: /\.js$/,
                exclude: /node_modules/


        }
    ]
    }
};