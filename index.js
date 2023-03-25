const koa = require('./lib/application');

const app = new koa();
app.use((req,res) => {
    res.end('Welcome')
})
// app.on('yilin', function () {
//     console.log('yilin');
// })
// setTimeout(() => {
//     app.emit('yilin');    
// },2000)

app.listen(8888, () => {
    console.log('server is running');
});