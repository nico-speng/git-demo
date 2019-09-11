// 引入express模块
const express = require('express');
// 导入mongoose模块
const mongoose = require('mongoose');
// 导入bodyParser模块
const bodyParser = require('body-parser');
// 引入path模块
const path = require('path');

// 创建网站服务器
const app = express();

// 创建连接
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then('数据库连接成功')
    .catch('数据库连接失败');

// 处理post请求参数
app.use(bodyParser.json());
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

// 导入todo路由案例
const todoRouter = require('./route/todo');

// 当客户端的请求路径以/todo开头时
app.use('/todo', todoRouter);

app.listen(3000);

console.log('服务器已启动');
