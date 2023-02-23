// 如果 thisArg 参数提供给 map，则会被用作回调函数的 this 值。
// 否则 undefined 会被用作回调函数的 this 值。
// this 的值最终相对于 callbackFn 函数的可观察性是依据确定函数绑定的 this 的常见规则决定的。


Array.prototype.map = function (callbackFn,thisArg) {
    if (this === null || this === undefined) {//这个this是在原型链上添加的方法，一般不可能为null||undefined
        //Array.protype.map.call(null)
        throw new TypeError('cannot read proerty map of null undefined')
    }
    if (Object.prototype.toString.call(callbackFn) != '[object Function]') {
        throw new TypeError(callbackFn + 'is not a function')
    }
    let O = Object(this);
    let T = thisArg;
    let len = O.length;
    let A = new Array(len);//全新分配内存
    for (let k = 0; k < len; k++){
        if (k in O) {
            let kValue = O[k];
            let mappedValue = callbackFn.call(T,kValue);
            A[k] = mappedValue;
        }
    }
    return A;
}


let obj = { val: 3 };
let newNums = nums.map(function (item, index, array){
    return item + index + array[index] + this.val;
},obj)
console.log(newNums);


