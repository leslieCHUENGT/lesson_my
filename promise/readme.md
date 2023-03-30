# Promise A + 规范
- Promise类 then catch resolve reject all race finally
- 传一个参数 函数 也叫executor(立即执行)
- executor 有两个参数 resolve reject 函数
- 三个状态 pending fullfilled rejected
  - pending,可以转换为fulfilled和rejected
  - 不可以多次执行同一个promise
  - 成功时，不可转为其他状态，且拥有一个不可改变的值
  - 失败时，不可转为其他状态，且有一个不可改变的原因
  - executor报错，直接reject()
- then(onFulfilled, onRejected)
  - state转为fulfilled,this.value -> onFulfilled运行
  - rejected this.reason -> onRejected 
- then 
  1. 如果异步，压入数组，当状态发生改变，执行
  2. 解决回调地狱问题(this.state 解决的)
  3. 控制了执行顺序 then 链式调用
  4. 前一个promise then 怎么执行下一个then？
  5. return promise
  6. promise value