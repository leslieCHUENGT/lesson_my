# 函数
- 函数的记忆功能
    1. 函数的参数或函数的返回值也是函数的话，我们称之为高阶函数  
        memorize高阶函数
    2. 闭包
    3. 巧妙利用缓存，提升性能的关键

- 闭包是如何形成的?
    1. 函数嵌套函数，且运行

- 记忆函数
  1. 空间复杂度换时间复杂度 cache{}
  2. 使用key
   var key = arguments.length + Array.prototype.join.call(arguments, ",")
   不能处理参数是对象这种情况
   原因是join会toString导致了[object object] 
  3. memorize 函数需要优化
    


