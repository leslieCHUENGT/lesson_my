const userModel = require('../lib/mysql.js')
const fs = require('fs')
const md5 = require('md5') // 单向加密
const moment = require('moment') // 时间

exports.getSignup = async ctx => { 
    let data = {
        title: '注册',
        session: ctx.session
    }
    await ctx.render('signup', data)
}

exports.postSignup = async ctx => {
    // model 
    const { name, password, repeatpass, avatar } = ctx.request.body
    if (!name) {
        ctx.body = {
            code: 500,
            message: '用户名没填'
        }
        return
    }
    if (!password) {
        ctx.body = {
            code: 500,
            message: '密码没填'
        }
        return 
    }
    if (password != repeatpass) {
        ctx.body = {
            code: 500,
            message: '两次密码输入不一致'
        }
        return 
    }

    if (!avatar) {
        ctx.body = {
            code: 500,
            message: '请上传头像'
        }
        return 
    }
    try {
        const data = await userModel.findDataCountByName(name)
        // console.log(data)
        if(data[0].count >= 1) {
            // 用户名已存在
            ctx.body = {
                code: 500,
                message: '用户已存在'
            }
            return
        }
        // console.log(avatar);
        // png
        let base64Data = avatar.replace(/^data:image\/\w+;base64,/, "")
        // node 的二进制对象 Buffer
        let dataBuffer = new Buffer(base64Data, 'base64')
        // 不能重名
        let imgName = Number(Math.random().toString().substring(3)).toString(36) + Date.now()
        let upload = await new Promise((resolve, reject) => {
            fs.writeFile(
                './public/images/' + imgName + '.png', dataBuffer,
                err => {
                    // 如果上传过程出现问题
                    if(err) {
                        ctx.body = {
                            code: 500,
                            msg: '上传头像失败'
                        }
                        reject(false)
                    }
                    resolve(true)
                }
            )
        })
        if(upload) {
            try {
                await userModel.insertData([name, md5(password), imgName + '.png', moment().format('YYYY-MM-DD HH:mm:ss')])
                ctx.body = {
                    code: 200,
                    message: '注册成功'
                }
            }catch(err) {
                ctx.body = {
                    code: 500,
                    message: '注册失败，请重试'
                }
            }
        }
    }catch(err) {
        ctx.body = {
            code: 500,
            msg: err
        }
    }
}