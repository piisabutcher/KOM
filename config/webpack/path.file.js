const { resolve } = require('path');

//项目根目录
const projectPath = process.cwd();

//代码地址目录
const srcPath = resolve(projectPath, './src');

//组件文件目录
const componentPath = resolve(srcPath, './component');

//输出文件目录
const outPath = resolve(projectPath, './dist');

//入口文件
const entryPath = resolve(srcPath, './app.jsx');
const entryHtml = resolve(srcPath, './index.html');

module.exports = {
    srcPath,
    componentPath,
    outPath,
    entryPath,
    entryHtml
};
