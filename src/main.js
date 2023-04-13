import { template } from 'lodash'

// const compiler = template('<h1><%= title %><h1>')
// const html = compiler({title:'My Component'})

// document.getElementById('app').innerHTML = html

// setTimeout(() => {
//     const html2 = compiler({ 字节大神 })
//     document.getElementById('app').innerHTML = html2

// },2000)

// props 数据参数
// const MyComponent = props => {
//     const compiler = MyComponent.cache || (MyComponent.cache = template('<h1><%= title %><h1>'))
//     return compiler(props)
// }
// MyComponent.cache = null
// document.getElementById('app').innerHTML = MyComponent({ title: 'MyComponent' })


// MyComponent 组件
class MyComponent {
  render() {
    // render 函数产出 VNode
    return {
      tag: 'div'
    }
  }
}

// VNode
const componentVnode = {
  tag: MyComponent
}

// 渲染
render(componentVnode, document.getElementById('app'))

function render(vnode, container) {
  if (typeof vnode.tag === 'string') {
    // html 标签
    mountElement(vnode, container)
  } else {
    // 组件
    mountComponent(vnode, container)
  }
}

function mountComponent(vnode, container) {
  // 创建组件实例
  const instance = new vnode.tag() // new MyComponent
  // 渲染
  instance.$vnode = instance.render()
  // 挂载
  render(instance.$vnode, container)
}

function mountElement(vnode, container) {
  // 创建元素
  const el = document.createElement(vnode.tag)
  // 将元素添加到容器
  container.appendChild(el)
}











