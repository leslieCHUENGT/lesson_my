import { VNodeFlags, ChildrenFlags } from './flags'

export const Fragment = Symbol()
export const Portal = Symbol()
export function h(tag, data = null, children = null) {
    let flags = null
    if (typeof tag === 'string') {
        flags = tag === 'svg' ?VNodeFlags.ELEMENT_SVG : VNodeFlags.ELEMENT_HTML
    } else if (tag === Fragment) {
        flags = VNodeFlags.FRAGMENT
    } else if (tag === Portal) { 
        flags = VNodeFlags.PORTAL
        tag = data && data.target//???
    } else {
        // 兼容 Vue2 的对象式组件
        if (tag !== null && typeof tag === 'object') {
            flags = tag.functional//???
                ? VNodeFlags.COMPONENT_FUNCTIONAL
                : VNodeFlags.COMPONENT_FUNCTIONAL
        } else if (typeof tag === 'function') { // Vue3 的类组件
            // 箭头函数没有构造函数，更别说有prototype
            flags = tag.prototype && tag.prototype.render
                ? VNodeFlags.COMPONENT_STATEFUL_NORMAL
                : VNodeFlags.COMPONENT_FUNCTIONAL
        }
    }

    let childFlags = null
    if (Array.isArray(children)) {
        const { length } = children
        if (length === 0) {
            childFlags = ChildrenFlags.NO_CHILDREN
        } else if (length === 1) {
            childFlags = ChildrenFlags.SINGLE_VNODE
            children = children[0]
        } else {
            // 2个以上
            childFlags = ChildrenFlags.KEYED_VNODES
            children = normalizeVNodes(children)
        }
    } else if (children === null) {
        childFlags = ChildrenFlags.NO_CHILDREN
    }else if (childFlags._isVNode) {
        childFlags = ChildrenFlags.SINGLE_VNODE
    } else {
        // 文本节点
        childFlags = ChildrenFlags.SINGLE_VNODE
        children = createTextNode(children + '')
    }
    return {
        tag,
        _isVNode: true,
        el:null,
        flags,
        data,
        children,
        childFlags
    }
}
function createTextNode(text) {
    return {
        _isVNode: true,
        flags: VNodeFlags.TEXT,
        tag: null,
        children: text,
        childFlags: ChildrenFlags.NO_CHILDREN
    }
}
// 保证有key
function normalizeVNodes(children) {
    const newChildren = []
    for (let i = 0, len = children.length; i < len; i++) { 
        const child = children[i]
        if (child.key === null) {
            child.key = '|' + i
        }
        newChildren.push(child)
    }
    return newChildren
}