const Router = require('koa-router');//引入koa路由
const teacherRepository = require('../repository/teacher');//引入老师仓库
const router = new Router();

router.get('/teacher', async (ctx) => {
    const res = await teacherRepository.query();
    ctx.body = {
        status: 200,
        res
    };
});


router.post('/teacher', async (ctx) => {
    const res = await teacherRepository.create(ctx.request.body)
    ctx.body = {
        status: 200,
        res
    }
});

router.delete('/teacher/:id', async (ctx) => {
    await teacherRepository.remove(ctx.params.id);
    ctx.body = {
        status: 204,
    }
})

exports.router = router;