const Router = require('koa-router');//引入koa路由
const studentRepository = require('../repository/student');//引入学生仓库

const router = new Router();

router.get('/student', async (ctx) => {
    const result = await studentRepository.query();
    ctx.body = {
        status: 200,
        result
    };
});

router.post('/student', async (ctx) => {
    const result = await studentRepository.create(ctx.request.body);
    ctx.body = {
        status: 200,
        result
    };
});

router.delete('/student/:id', async (ctx) => {
    await studentRepository.remove(ctx.params.id);
    ctx.body = {
        status: 204
    };
});

exports.router = router;