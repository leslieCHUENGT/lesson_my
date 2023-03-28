const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    // console.log(req.url)
      if (req.url === '/') {
         // 首页html index.html
        //  fs.readFile('./index.html', 'utf8', (err, data) => {
        //     // node 异步无阻塞的
        //     // 默认第一个参数err 
        //     if (err) {
        //         res.end('出错了')
        //         return
        //     }
        //     // console.log(data)
        //     res.end(data)
        //  })
        // Async 异步  Sync 同步 阻塞
        // const data = fs.readFileSync('./index.html', 'utf8')
        // console.log(data)
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
        return 
    }
    //   console.log(req.url)
    let abs = path.join(__dirname, req.url)
    // 文件或目录的信息
    fs.stat(abs, (err, stat) => {
        if(err) {
            res.statusCode = 404
            res.end('not found')
            return
        }
    })
    console.log(abs)
    //   res.end('hello word')
})

server.listen(3000)