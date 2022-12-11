function add(a,b){
    return a+b;
}
//闭包 函数内部还有函数
function memorize(f){
    //缓存结果使用对象自变量{}key
    //console.log(fn,args);

    var cache = {
        //key字符串
    };
    return function(){
        var key = arguments.length + Array.prototype.join.call(arguments, ",");//字符串拼接
    //  console.log(Array.prototype.join.call(arguments, ","));
        if (key in cache) {
            return cache[key]
        } else{
            console.log('add。。。。。')
            // cache[key] = f(arguments);
            // apply call 都可以运行函数， 手动指定内部的this , 
            // apply  传数组集合， 作为f 的参数
            //return cache[key] = f.apply(this, arguments)
            // return cache[key]
            // cache[key] = f.call(this, ...arguments)
          return cache[key] = f.apply(this, arguments)
        } 
    }
}

//函数运行完后本来就销毁
// 函数进入执行栈，创建函数作用域
//返回值是函数
var memorizedAdd =  memorize(add);//运行生成闭包函数 memorize(add)()
//出栈，内存的回收，cache理应不存在了，但是被接下来的函数引用着，作用域链
memorizedAdd(1,2);//闭包运行时可以找到生成时上下文环境中的变量cache
console.log(memorizedAdd(1,2));


















