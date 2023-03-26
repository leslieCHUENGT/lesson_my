module.exports = {
    checkLogin: async (ctx,next) => {
        //可能没有session对象，加前面的，不会报错
        if (!ctx.session && !ctx.session.user) {
            ctx.redirect('/singin');            
        }
        await next();
    }
}