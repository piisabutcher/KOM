const { resolve } = require('path');

//项目根目录
const projectPath = process.cwd();

//代码地址目录
const srcPath = resolve(projectPath, './src');


//入口文件目录
const mainPath = resolve(srcPath, './main');
//组件文件目录
const componentPath = resolve(srcPath, './component');

//输出文件目录
const outPath = resolve(projectPath, './dist');

//入口文件
const entryPath = resolve(mainPath, './index.jsx');
const entryHtml = resolve(mainPath, './index.html');

module.exports = {
    srcPath,
    mainPath,
    componentPath,
    outPath,
    entryPath,
    entryHtml
};
