const { resolve } = require('path');

//项目根目录
const projectPath = process.cwd();

//代码地址目录
const srcPath = resolve(projectPath, './src');

//入口文件目录
const mainPath = resolve(srcPath, './main');

//入口文件
const indexJsPath = resolve(mainPath, './index.jsx');
const indexHtmlPath = resolve(mainPath, './index.html');

//输出文件
const outPath = resolve(projectPath, './dist');
module.exports = {
    srcPath,
    indexHtmlPath,
    indexJsPath,
    outPath
};
