var canConstruct = function (ransomNote, magazine) {
    const strArr = new Array(26).fill(0);
    const base = "a".charCodeAt();
    for (const s of magazine) {
        strArr[s.charCodeAt() - base]++;
    }
    for (const s of ransomNote) {
        const index = s.charCodeAt() - base;
        if (!strArr[index]) return false;
        strArr[index]--;
    }
    return true;
}
//判断字符构成，哈希法利用数组Array(26).fill(0)，"a".charCodeAt导出ASCII码
//找到对应的下标++
//找到对应的下标-- 为空则直接return false