//web app
let http = require('http');
// node event loop
// node events 模块
let EventEmitter = require('events');
let context = require('./content');
let request = require('./request');
let response = require('./response');

class Koa extends EventEmitter {
    constructor () {
      super()
      this.fn
      this.context = context // 将三个模块保存，全局的放到实例上
      this.request = request
      this.response = response
    }
    use (fn) {
      this.fn = fn
    }
    createContext(req, res){ // 这是核心，创建ctx
      // 使用Object.create方法是为了继承this.context但在增加属性时不影响原对象
      const ctx = Object.create(this.context)
      const request = ctx.request = Object.create(this.request)
      const response = ctx.response = Object.create(this.response)
      // 请仔细阅读以下眼花缭乱的操作，后面是有用的
      ctx.req = request.req = response.req = req
      ctx.res = request.res = response.res = res
      request.ctx = response.ctx = ctx
      request.response = response
      response.request = request
      return ctx
    }
    handleRequest(req,res){ // 创建一个处理请求的函数
      let ctx = this.createContext(req, res) // 创建ctx
      this.fn(ctx) // 调用用户给的回调，把ctx还给用户使用。
      res.end(ctx.body) // ctx.body用来输出到页面，后面会说如何绑定数据到ctx.body
    }
    listen (...args) {
      let server = http.createServer(this.handleRequest.bind(this))// 这里使用bind调用，以防this丢失
      server.listen(...args)
    }
  }

module.exports = Koa;