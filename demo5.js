var propValue = function(obj){
    return obj.value
}

var memoizedAdd = memorize(propValue)
//因为第一版使用了 join 方法，我们很容易想到当参数是对象的时候，就会自动调用 toString 方法转换成 [Object object]，再拼接字符串作为 key 值。
console.log(memoizedAdd({value: 1})) // 1   1[object object]
console.log(memoizedAdd({value: 2})) // 1

// 两者都返回了 1，显然是有问题的，所以我们看看 underscore 的 memoize 函数是如何实现的：
// 如果要支持多参数，我们就需要传入 hasher 函数，自定义存储的 key 值。
// 第二版 (来自 underscore 的实现)
var memorize = function(func, hasher) {
    var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);//''确保是字符串
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    //把cache挂载函数对象上
    memoize.cache = {};
    return memoize;
};
// 从这个实现可以看出，underscore 默认使用 function 的第一个参数作为 key，所以如果直接使用
var add = function(a, b, c) {
    return a + b + c
  }
  
  var memoizedAdd = memorize(add)
  
  memoizedAdd(1, 2, 3) // 6
  memoizedAdd(1, 2, 4) // 6
// 所以我们考虑使用 JSON.stringify：可以解决key的问题
var memoizedAdd = memorize(add, function(){
    var args = Array.prototype.slice.call(arguments)
    return JSON.stringify(args)
})

console.log(memoizedAdd(1, 2, 3)) // 6
console.log(memoizedAdd(1, 2, 4)) // 7





