var evalRPN = function (tokens) {
    const stack = [];
    //Number(value) 将转换字符串或者其它值到 Number 类型。如果该值不能被转换，它会返回 NaN
    for (const token of tokens) {
        if (isNaN(Number(token))) {
            const n2 = stack.pop();
            const n1 = stack.pop();
            switch (token) {
                case "+":
                    stack.push(n1 + n2);
                    break;
                case "-":
                    stack.push(n1 - n2);
                    break;
                case "*":
                    stack.push(n1 * n2);
                    break;
                case "/":
                    stack.push(n1 / n2 | 0);//可以保证存在结果
                    break;
            }
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
}