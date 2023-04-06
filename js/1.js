function foo() {
  var a = 2;

  function bar() {
    console.log( a );
  }

  return bar;
}

foo()();
// 2

// 闭包的执行看起来像是开发者使用的一个小小的 “作弊手段”
// ——绕过了作用域的监管机制，
// 从外部也能获取到内部作用域的信息。














