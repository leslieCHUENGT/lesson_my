import { h,Fragment } from './h'


const elementVNode = h('input', {
    class: 'cls-a',
    type: 'checkbox',
    checked: true,
    custom: '1'
})








// 动态类名
// const dynamicClass = ['class-b', 'class-c']
// const elementVNode = h('div', {class:['class-a',...dynamicClass]})
// render(elementVNode, document.getElementById('app'))


// const elementVNode = h(
//     'div',
//     {
//         style: {
//             height: '100px',
//             with: '100px',
//             background:'red'
//         }
//     },
//     h('div',
//         {
//             style: {
//                 height: '100px',
//                 with: '100px',
//                 background:'red'
//             }
//         }
//     )
// )
// // console.log(elementVNode)
// render(elementVNode, document.getElementById('app'))



// const elementWithTextVNode = h('div', null, '我是文本')
// console.log(elementWithTextVNode)

// const fragmentVNode = h(Fragment, null, [h('span'), h('span')])
// console.log(fragmentVNode)

// function MyFunctionalComponent() {
    
// }

// const functionalComponentVNode = h(MyFunctionalComponent,null,h('div'))
// console.log(functionalComponentVNode)

// class MyStatefulComponent extends Component{

// }
// const statefulComponentVNode = h(MyStatefulComponent,null,h('div'))
