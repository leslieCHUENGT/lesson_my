var x = 1;

function foo(x = x) {
  // ...
}

foo() // ReferenceError: Cannot access 'x' before initialization
// 参数x = x形成一个单独作用域。实际执行的是let x = x，由于暂时性死区的原因，这行代码会报错。

// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

// arguments变量的写法
function sortNumbers() {
    return Array.from(arguments).sort();
  }
  
// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();
//   rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

// 函数的length属性，不包括 rest 参数。

// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
// 报错
let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem1 = id => ({ id: id, name: "Temp" });

//有返回值
var sum = (num1, num2) => num1 + num2;
var sum = (num1, num2) => { return num1 + num2; }

//箭头函数写法
const fn = (item1, item2) => item1 + item2;
//一般写法
function fn(i, j) {
    return i + j;
}
//箭头函数的一个用处是简化回调函数。

function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}
var s2 = 0;
var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2,s2), 3100);
// s1: 3
// s2: 0 3
// 如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。

var handler = {
  id: '123456',
//   上面代码的init()方法中，使用了箭头函数，这导致这个箭头函数里面的this，总是指向handler对象。
  init: function() {
    document.addEventListener('click',
      event => this.doSomething(event.type), false);
  },
//   如果回调函数是普通函数，那么运行this.doSomething()这一行会报错，因为此时this指向document对象。
  doSomething: function(type) {
    console.log('Handling ' + type  + ' for ' + this.id);
  }
};

// 下面是 Babel 转箭头函数产生的 ES5 代码，就能清楚地说明this的指向。
// ES6
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}
// ES5
function foo() {
  var _this = this;

  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}

function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

const cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}











