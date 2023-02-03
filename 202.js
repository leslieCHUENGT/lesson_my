// 方法四：使用Set()，求和用reduce
var isHappy = function(n) {
    let set = new Set();
    let totalCount;
    while(totalCount !== 1) {
        let arr = (''+(totalCount || n)).split('');
        totalCount = arr.reduce((total, num) => {
            return total + num * num
        }, 0)
        if (set.has(totalCount)) {
            return false;
        }
        set.add(totalCount);
    }
    return true;
};
// 方法三：使用Set()更简洁
/**
 * @param {number} n
 * @return {boolean}
 */

 var getSum = function (n) {
    let sum = 0;
    while (n) {
        sum += (n % 10) ** 2;
        n =  Math.floor(n/10);
    }
    return sum;
}
var isHappy1 = function(n) {
    let set = new Set();   // Set() 里的数是惟一的
    // 如果在循环中某个值重复出现，说明此时陷入死循环，也就说明这个值不是快乐数
    while (n !== 1 && !set.has(n)) {
        set.add(n);
        n = getSum(n);
    }
    return n === 1;
};








