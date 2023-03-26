const routers = require('koa-router')();
const controller = require('../controller/c-posts');
// const router = require('./signout');
const checkLogin = require('../middlewares/check').checkLogin

//文章页
routers.get('/', controller.getRedirectPosts)
//单篇文章详情页
routers.get('/posts/:postId', controller.getSinglePosts)
//发表文章
routers.get('/create',checkLogin,controller.getCreate)
routers.get('/posts', controller.getPosts)
//阅读
routers.post('/create', controller.postCreate)
//删除单篇文章
// routers.post('/post/:postId', checkLogin, controller.postDelete)
//新增评论
// routers.post('/post/:postId', checkLogin, controller.postComment)
module.exports = routers