const Router = require('koa-router');//引入koa路由

const router = new Router();

router.get('/teacher', (ctx) => {
    ctx.body = {
        status: 200,

    };
});


router.post('/teacher', (ctx) => {
    ctx.body = {
        status: 204,

    };
});

exports.router = router;