# vue源码 
- 响应式好处
    - 原理DOM API的约束 专注业务开发 更好更快
    - 组件之间通过响应式来通知 effect
    - template里 set get set 
    - computed watchEffect 
      - proxy get 回调函数
    - onUpdate
- 平台无关性
  - uniapp vue 小程序
  - react native ios/android app
  - 相同：都是响应式  UI界面
  - 不同：不同产品和平台 
  - template {{list}} <-> VDOM(VNODE 内存快 proxy) -> mouted(DOM/WXML/XML 随意编译)
- vue响应式的细节
  - 平台无关性
  - proxy get set 读写 代理后 get依赖收集 set回调运行 effect
  - proxy包裹响应式对象 读->track(跟踪)收集依赖 注册到全局地图 
  - tigger 触发依赖函数的执行
  - 依赖地图targetMap:Map { object:{
            "num1":[effect1(),effect2()],
            "num2":[effect3()]
            }
        }
- 更新时
  - prev state template vdom DOM 
  - current {  }    一次性vdom->一次性更新DOM更新   
