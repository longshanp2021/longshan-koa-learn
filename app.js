const mongoose = require('mongoose');//引入mongoose
const Koa = require('koa');//引入koa
const bodyParse = require('koa-bodyparser');//引入ctx.body解析中间件
const cors = require('koa-cors')//引入跨域中间件
// const Router = require('koa-router');//引入koa路由
const app = new Koa();//实例化koa
app.use(bodyParse());//使用ctx.body解析中间件
app.use(cors());//使用跨域中间件,解决跨域问题

const mongoDB = require('./config/config').mongonURI;//引入外部数据库URI
const { router:studentRouter } = require('./router/student');//引入外部路由文件
const { router:teacherRouter } = require('./router/teacher');//引入外部路由文件

app.use(studentRouter.routes());//初始化路由中间件
app.use(teacherRouter.routes());//初始化路由中间件

app.on('error', (err, ctx) => {
    console.error('server error', err);
});//错误

app.listen(4000, () => {
    console.log('端口号为:4000!!!');
});//设置监听端口

mongoose.connect(mongoDB).then(() => {
    console.log('数据库连接成功!!');
}).catch((err) => {
    console.log(err);
});//连接数据库
