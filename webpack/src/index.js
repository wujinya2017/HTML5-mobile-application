//初始化：yarn init -y
//安装yarn add webpack webpack-cli -D
//创建webpack.config.js
//yarn add webpack-dev-server -D
//yarn add html-webpack-plugin -D帮生成一个html文件的插件
//下载loader
//yarn add css-loader style-loader -D  解析css
//yarn add less-loader less -D

//yarn add  react react-dom
//yarn add babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env -D
//yarn add @babel/preset-react -D
//yarn add mini-css-extract-plugin -D
//yarn add file-loader -D
//yarn add filemanager-webpack-plugin -D
//yarn add antd-mobile

import './index.less'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)