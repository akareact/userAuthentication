module.exports = {
    mode : "development",
    entry : "./client/index.js",
    output : {
        filename : "bundle.js"
    },
    resolve : {
        extensions : [".js", ".jsx"]
    },
    devServer : {
        historyApiFallback : {
            rewrites: [
                { from: /^\//, to: './public/index.html' },
                
            ]
        }
    },
    module : {
        rules : [
            {
                test : /\.jsx?$/,
                exclude : /(node_modules)/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    }
}

