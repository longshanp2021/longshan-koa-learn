const Router = require('koa-router');
const router = new Router();

const bookRepository = require('../repository/book')

router.get('/book', async (ctx) => {
    const res = await bookRepository.query();
    ctx.body = {
        status: 200,
        code: 1,
        res
    }
});

router.post('/book', async (ctx) => {
    const res = await bookRepository.create(ctx.request.body);
    ctx.body = {
        code: 1,
        message: '成功',
        res
    }
})
exports.router = router;