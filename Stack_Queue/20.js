//括号匹配，使用栈
var isValid = function (s) {
    const stack = [],
        map = {
            "(": ")",
            "{": "}",
            "[": "]"
        };//使用map
    //构造for循环，因为是字符串，使用迭代器比较方便
    for (const x of s) {
        //使用if(x in map)来判断是否存在于map
        //在则push进stack即可continue
        if (x in map) {
            stack.push(x);
            continue;
        }
        //来到括号另一边，使用stack.pop()先出栈，再使用map判断，一举两得。
        if (map[stack.pop()] != x) return false;
    }
    //最后长度为0则符合条件
    return !stack.length;
}
