// 再来看一下使用数组和set来做哈希法的局限。
// 数组的大小是受限制的，而且如果元素很少，而哈希值太大会造成内存空间的浪费。
// set是一个集合，里面放的元素只能是一个key，而两数之和这道题目，

//不仅要判断y是否存在而且还要记录y的下标位置，因为要返回x 和 y的下标。所以set 也不能用。

// 此时就要选择另一种数据结构：map ，map是一种key value的存储结构，可以用key保存数值，用value在保存数值所在的下标。


var twoSum = function (nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++){ // 遍历当前元素，并在map中寻找是否有匹配的key
        if (hash[target - nums[i]] !== undefined) {
            return [hash[target - nums[i]],i];
        }
        hash[nums[i]] = i;// 如果没找到匹配对，就把访问过的元素和下标加入到map中
    }
    return [];
}
//当使用js写map哈希法，定义一个hash={}，hash[nums]=i即认为是hash map中的存储结构为 {key：数据元素，value：数组元素对应的下标}