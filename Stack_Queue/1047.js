var removeDuplicates = function (s) {
    //stack底层使用数组实现
    const stk = [];
    //遍历
    for (const ch of s) {
        //用栈顶元素与下一个即将入栈的元素比较||长度，成立则出栈
        if (stk.length && stk[stk.length - 1] === ch) {
            stk.pop();
        } else {
            // 不成立则入栈
            stk.push(ch);
        }
    }
    //.jion('')的api打印即可
    return stk.join('');
};
//字符串匹配







