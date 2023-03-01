//底层用数组实现，辅助栈与主栈的定义
var MyQueue = function () {
    this.stackIn = [];
    this.stackOut = [];
};
//使用prototype属性添加方法，push元素进主栈
MyQueue.prototype.push = function (x) {
    this.stackIn.push(x);
};
//整体思路：
//如果辅助栈里有元素，直接出栈即可。如果没有，那么就入栈，最后再出栈。
MyQueue.prototype.pop = function () {
    const size = this.stackOut.length;
    if (size) {
        return this.stackOut.pop();
    }
    while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.pop();
};
//一进一出拿数据
MyQueue.prototype.peek = function () {
    const x = this.pop();//出是直接调用pop()即可
    this.stackOut.push(x);//进
    return x;
};
//判断是否为空，只要判断长度(主栈与辅助栈)是否为空
MyQueue.prototype.empty = function () {
    return !this.stackIn.length && !this.stackOut.length;;
};




