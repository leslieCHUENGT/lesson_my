const http = require('http')
const path = require('path')
const fs = require('fs')
// www.baidu.com -> dns 解析
/* ngnix 调度程序 多线程的, 多人访问500-1000人, 负载均衡服务器(算法) 访问代理 ->
 服务器集群 -> 某台服务器 多核CPU -> node 单线程( 容错处理  try catch ) */
// cdn 服务器 会走piccdn.baidu.com cdn 内容分发网络 静态资源内容不变的 最重要的是速度
// 带宽资源，
http
    .createServer((req, res) => {
        if (req.url === '/') {
            fs.createReadStream(
                path.join(__dirname, 'index.html')
            )
            .pipe(res)
            return 
        }
        // 3 个图片 * n 个用户 并发 缓存很重要 强缓存
        // HTTP 0.9 没有提供缓存  HTTP 1.0 Expires
        let abs = path.join(__dirname, req.url)
        fs.stat(abs, (err, stat) => {
            if (err) {
                res.statusCode = 404
                res.end('Not Found')
                return
            }
            if (stat.isFile()) {
                res.setHeader('Last-Modified', stat.ctime.toGMTString())
                // console.log(stat.ctime.toGMTString())
                if (req.headers['if-modified-since'] === stat.ctime.toGMTString()) {
                    res.statusCode = 304
                    res.end('Not Modified')
                    return 
                } 
                fs.createReadStream(abs).pipe(res)
            }
        })

    })
    .listen(8888)
