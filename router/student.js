const Router = require('koa-router');//引入koa路由
const router = new Router();

router.get('/student', (ctx) => {
    
    ctx.body = {
        status: 200,

    };
});

router.post('/student', (ctx) => {
    ctx.body = {
        status: 204,

    };
});

exports.router = router;