# 订阅发布模式
- vue响应式使用的模式
  - 首先给发布者维护一个订阅者数组 listen
  - clientList数组
  - 如果有消息，怎么通知他响应？放一个函数
  - trigger(触发) 方法 通知订阅者
- 涛哥买房
    编码实现
    售楼部 发布者 发消息给他的观察者
- vue 
  {{count}} 订阅一下 订阅者
  const count = ref(0) 发布者 只有一个
  const len = computed(()=>count*2) 订阅一下 订阅者
  <Child :count="count" /> 订阅一下 订阅者

- Array.prototype.shift()
  shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

- 发布-订阅模式其实是一种对象间一对多的依赖关系，
- 当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知。+
- 上面一个看似简单的操作，其实是一个典型的发布订阅模式，
- 公众号属于发布者，用户属于订阅者；用户将订阅公众号的事件注册到调度中心，
- 公众号作为发布者，当有新文章发布时，公众号发布该事件到调度中心，
- 调度中心会及时发消息告知用户。
- 发布-订阅模式，看似陌生，其实不然。
- 工作中经常会用到，例如 Node.js EventEmitter 中的 on 和 emit 方法；
- Vue 中的 $on 和 $emit 方法。他们都使用了发布-订阅模式，让开发变得更加高效方便。











