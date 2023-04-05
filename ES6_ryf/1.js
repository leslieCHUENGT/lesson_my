var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10 全局只有一个i 在循环过程中 i的值在不断改变 所以函数体内的i也不断改变


for (let i = 0; i < 3; i++) {//父作用域
    //子作用域
    let i = 'abc';
    console.log(i);
}
// 这表明函数内部的变量i与循环变量i不在同一个作用域
// abc
// abc
// abc

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6

//暂时性死区
var tmp = 123;
//只要块级作用域内存在let命令，他的变量就绑定了这个区域，不再受到外部影响
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
//“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
typeof x; // ReferenceError
let x;
//作为比较，如果一个变量根本没有被声明，使用typeof反而不会报错。
typeof undeclared_variable // "undefined"

function bar(x = y, y = 2) {
    return [x, y];
}
  
bar(); // 报错

// 不报错
var i = i;

// 报错
let j = j;
// ReferenceError: x is not defined

//因此，不能在函数内部重新声明参数。

function func(arg) {
  let arg;
}
func() // 报错

function func(arg) {
  {
    let arg;
  }
}
func() // 不报错







