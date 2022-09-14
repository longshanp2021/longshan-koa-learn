const Router = require("koa-router");
const router = new Router();

router.get("/cars", async (ctx) => {
  ctx.body = {
    data: [],
  };
});

router.post("/cars", async (ctx) => {
  console.log(ctx.request.body);
  // 获取请求的body
  // console.log(ctx.request.query);
  // 获取请求的params
  ctx.body = {
    message:'请求成功!'
  };
});

exports.router = router;
