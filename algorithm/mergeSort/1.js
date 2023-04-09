function mergeArr(arr1, arr2) {
    
}

function mergeSort(arr) {
    if (arr.length <= 1) {
       return arr;
    }
 
    // 分割原始数组为左、右两个子数组
    const midIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, midIndex);
    const rightArr = arr.slice(midIndex);
 
    // 递归地对左、右两个子数组进行排序
    const sortedLeftArr = mergeSort(leftArr);
    const sortedRightArr = mergeSort(rightArr);
 
    // 合并左、右两个已排序的子数组
    const mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < sortedLeftArr.length && rightIndex < sortedRightArr.length) {
       if (sortedLeftArr[leftIndex] < sortedRightArr[rightIndex]) {
          mergedArr.push(sortedLeftArr[leftIndex]);
          leftIndex++;
       } else {
          mergedArr.push(sortedRightArr[rightIndex]);
          rightIndex++;
       }
    }
    return mergedArr.concat(sortedLeftArr.slice(leftIndex)).concat(sortedRightArr.slice(rightIndex));
 }
 
 const arr = [8, 7, 6, 5, 4, 3, 2, 1];
 const sortedArr = mergeSort(arr);
 console.log(sortedArr); // 输出 [1, 2, 3, 4, 5, 6, 7, 8]
// 以上代码中的 `mergeSort()` 函数使用了分治算法来排序给定的数组。
// 首先，它将原始数组分割成两个子数组，然后递归地对左、右两个子数组进行排序并合并它们，最终返回已经排序好的数组。
// 在合并过程中，该函数依次比较左、右两个子数组中的元素，将较小的那个加入到一个新的数组中，并移动相应子数组的指针，
// 直到其中一个子数组的所有元素都被加入到新的数组中。最后，该函数将另一个子数组剩余的元素也加入到新的数组中。


function mergeSort(arr) {
    const len = arr.length
    if(len <= 1) return arr

    const mid = Math.floor(len / 2) // 取整
    const leftArr = mergetSort(arr.slice(0, mid))
    const rightArr = mergetSort(arr.slice(mid, len))
    arr = mergeArr(leftArr, rightArr)
    return arr 
    // len 完成排序
}
/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * arr1 arr2 都是有序的
 * O(n)
 */
function mergeArr(arr1, arr2) {
    // 初始化两个指针，指向 arr1  arr2
    let i = 0, j = 0;
    // 结果数组
    const res = []
    const len1 = arr1.length;
    const len2 = arr2.length;
    while(i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++;
        } else {
            res.push(arr2[j])
            j++
        }
    }
    if (i < len1) {
        return res.concat(arr1.slice(i))
    } else {
        return res.concat(arr1.slice(j))
    }
}

console.log(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]))