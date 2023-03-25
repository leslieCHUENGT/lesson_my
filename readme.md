- EventEmitter
  - Node.js 提供的监听器类
  - addEventListener 
    - on 添加一个时间监听 自定义事件
    - emit 触发
      - 父子组件传值 当子组件告诉父组件发生了什么的时候  definEmits 
      - @yilin = "callyilin" 

- 用户调用use方法时，把这个回调fn存起来，创建一个createContext函数用来创建上下文，创建一个handleRequest函数用来处理请求，用户listen时将handleRequest放进createServer回调中，在函数内调用fn并将上下文对象传入，用户就得到了ctx。
