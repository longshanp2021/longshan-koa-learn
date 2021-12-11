let loginSignIn = async ctx => {
    // ctx.request.body = '哈哈哈';

    console.log(ctx);
    // let requestBody = ctx.request.body;
    // if(requestBody.username === 'admin' && requestBody.password === '123456') {
    //   ctx.body = {
    //     status: 200,
    //     result: {
    //       code: 1,
    //       userInfo: {},
    //       message: '登录成功'
    //     }
    //   }
    // }
};


const adminApiConfig = {
    loginSignIn
};

module.exports = adminApiConfig;