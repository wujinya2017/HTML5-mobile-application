var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin')
var MiniCssExtractPlugin=require('mini-css-extract-plugin')
var FileManagerPlugin=require('filemanager-webpack-plugin')
module.exports={
    entry:{
        index:'./src/index.js',
        app:'./src/app.js'
    },
    output:{
        filename:'js/[name].js',
        path:path.resolve(__dirname,'build')
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            chunks:['index'],
            template:'./public/index.html'
        }),
        new HtmlWebpackPlugin({
            filename:'app.html',
            chunks:['app'],
            template:'./public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/index.css'
        }),
        new FileManagerPlugin({
           onStart:{
               delete:['build']
           }
        })
    ],
    devServer:{
        port:3000
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'images/[name].[ext]'
                    }
                }
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            }

        ] 
    }

}