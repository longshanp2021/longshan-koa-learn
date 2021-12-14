const Router = require('koa-router');//引入koa路由
const Teacher = require('../model/teacher');
const router = new Router();

router.get('/teacher', async (ctx) => {

    let data = await (() => {
        return new Promise((reslove, reject) => {
            Teacher.find({}, async function (err, doc) {
                if (doc) {
                    reslove(doc)
                } else {
                    console.log(err);
                }
            });
        })
    })()
    ctx.body = {
        status: 200,
        data
    };
});

router.post('/teacher', (ctx) => {
    console.log(ctx);
    ctx.body = {
        status: 204,

    };
});

exports.router = router;