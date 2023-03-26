const router = require('koa-router')() // 路由对象

// 控制权交给control层
router.get('/signout', async (ctx, next) => {
    ctx.session = null//退出则session为null
    // ctx.body = true
    ctx.redirect('/posts')
})

module.exports = router