const path = require('path');
const { srcPath, mainPath, componentPath,
    outPath, entryPath, entryHtml } = require("./path.file.js");
//插件，能自动生成一个html文件并把我们打包好的js引入文件中
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: entryPath,
    output:{
        path: outPath,
        filename:'app.js'
    },
    devServer:{
        hot:true,
        //proxy跨域时模拟接口代理
        open: true,// 自动打开浏览器
        port: 3000// 打开端口
    },
    module: {
        rules: [
            { test:/\.css$/, use:['style-loader','css-loader'] },
            { test:/\.less$/, use:['style-loader','css-loader','less-loader'] },
            { test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},
            { test:/\.(png|gif|bmp|jpg|jpeg)$/,use:'url-loader?limit=5000&name=[hash:8]-[name].[ext]'},
            { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            { test:/\.(js|jsx)$/,use:'babel-loader',exclude:/node_modules/},

        ]
    },
    resolve: {
        extensions: ['.js','jsx']
    },
    //配置生成的页面入口文件
    plugins: [
        new htmlWebpackPlugin({
            title:'webpack react配置',
            template: entryHtml,
            inject: 'body',
            favicon: "",//指定页面
            filename: "index.html"
        })
    ]
};

