import { VNodeFlags,ChildrenFlags } from "./flags"

export default function render(vnode, container) {
    // vnode -> tag  children data -> document.createElement DOM -> append->ｃｏｎｔａｉｎｅｒ
    // 判断是否是第一次挂载 挂载 更新， 替换
    const preVNode = container.vnode
    if (preVNode == null) {
        mount(vnode, container)
        container.vnode = vnode
    } else {
        if (vnode) {
            // 更新  
            // path(preVNode, vnode,container)
            container.vnode = vnode
        } else {
            // 删除
            container.removeChild(preVNode.el)
            container.vnode = null
        }
    }
}

function mount(vnode, container, isSVG) {
    const { flags } = vnode
    if (flags & VNodeFlags.ElEMENT) {
        mountElement(vnode, container, isSVG)
    } else if (flags & VNodeFlags.COMPONENT) {
        mountComponent(vnode, container, isSVG)
    } else if (flags & VNodeFlags.TEXT) {
        mountText(vnode, container)
    } else if (flags & VNodeFlags.FRAGMENT) {
        mountFragment(vnode, container, isSVG)
    } else if (flags & VNodeFlags.PORTAL) {
        mountPortal(vnode, container, isSVG)
    }
}

function mountElement(vnode, container, isSVG) {
    isSVG = isSVG || vnode.flags & VNodeFlags.ELEMENT_SVG
    const el = isSVG
        ? document.createElmentNS('http://www.w3.org/2000/svg', vnode.tag)
        : document.createElement(vnode.tag)
    container.appendChild(el)
    vnode.el = el
    const data = vnode.data
    if (data) {
        for(let key in data) {
            switch (key) { 
                case 'style':
                    for (let k in data.style) {
                        el.style[k] = data.style[k]
                    }
                    break;
                case 'class':
                    if (isSVG) {
                        el.setAttribute('class', data[key])
                    } else {
                        // el.className = data[key] // 转换为原始数据类型了toprimitive
                        el.className = data[key]
                    }
                    break;
                default:
                    if (domPropsRE.test(key)) {
                        el[key] = data[key]
                    } else {
                        el.setAttribute(key, data[key])
                    }
                    break;
            } 
        }
    }
    const childFlags = vnode.childFlags
    const children = vnode.children
    if (childFlags !== ChildrenFlags.NO_CHILDREN) {
        if (childFlags && ChildrenFlags.SINGLE_VNODE) {
            mount(children,el,isSVG)
        } else if (childFlags && ChildrenFlags.MULTIPLE_VNODES) {
            for (let i = 0, len = children.length; i < len; i++) { 
                mount(children[i],el,isSVG)
            }
        }
    }
    container.appendChild(el)
}

const domPropsRE = /\[A-Z]|^(?:value|checked|selected|muted)$/;

function mountComponent(vnode, container, isSVG) {
    
}
function mountText(vnode, container) {
    
}
function mountFragment(vnode, container, isSVG) {
    
}
function mountPortal(vnode, container, isSVG) {
    
}

// 这是一个正则表达式，用于匹配字符串中以大写字母开头的字符和特定的单词（value、checked、selected、muted）。具体含义解释如下：

// /：正则表达式的开头和结尾都使用斜杠包裹起来。
// \: 转义字符，使得后面的特殊字符可以被识别为普通字符。在这个正则表达式中，转义符号应用于方括号和竖线操作符。
// [a-z]：表示匹配任何一个以大写字母 a 到 z 开头的字符。
// |：表示或者，连接不同的匹配表达式。
// ^：表示不匹配，放在方括号内表示匹配不在方括号中的字符。（例如：[^0-9] 表示匹配除数字外出现的任意一个字符）
// (?:)：非捕获型分组，只匹配不获取这个分组的某个部分。
// value|checked|selected|muted：表示匹配具有 value、checked、selected 或 muted 中的任何一个单词中的任义一个字符，注意这里匹配的是整个单词，而不是单词中的一部分。
// $：表示字符串的结尾。
// 综上所述，这个正则表达式主要用于匹配某些 html 元素的属性名称，即以大写字母开头的属性名称或者指定的特定单词。