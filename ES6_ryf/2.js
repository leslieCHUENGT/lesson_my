// 例一
// let { log, sin, cos } = Math;

// 例二
const { log } = console;
log('hello') // hello

// 如果变量名与属性名不一致，必须写成下面这样。
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'
// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

let {length : len} = 'hello';
len // 5

// 返回一个数组

function example() {
    return [1, 2, 3];
}
let [a1, b1, c1] = example();
  
// 返回一个对象
  
function example() {
    return {
      foo: 1,
      bar: 2
    };
}
let { foo, bar } = example();

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world

// 获取键名
for (let [key] of map) {
    // ...
  }
  
  // 获取键值
  for (let [,value] of map) {
    // ...
  }




