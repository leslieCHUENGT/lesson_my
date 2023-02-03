var intersection = function(nums1,nums2){
    //保证nums1为length更长的数组，方便后续使用Array.has判断是否包含小数组的value值
    if(nums1.length < nums2.length){
        //实质是交换地址
        const _ = nums1;
        nums1 = nums2;
        nums2 = _;
    }
    //使用Set封装nums1s，便于使用has，不重复判断筛选
    const nums1Set = new Set(nums1);
    //使用Set封装，因为最后结果要求，不重复
    const resSet = new Set();
    for(let i = nums2.length - 1;i>=0;i--){
        nums1Set.has(nums2[i]) && resSet.add(nums2[i]);
    }
    //将Set类型转换为数组
    return Array.from(resSet);
}