var isAnagram = function(s,t) {
    if(s.length!==t.length) return false;//判断长度是否相同
    const resSet = new Array(26).fill(0);//创建新数组，初始值设置为0
    const base = "a".charCodeAt();//charCodeAt()方法转成ASCII码的数值
    for(const i of s){//使用const i of s遍历字符串
        resSet[i.charCodeAt()-base]++;//value ++
    }
    for(const i of t){
        if(!resSet[i.charCodeAt()-base]) return false;//遍历时发现存在不同的key处，则return false
        resSet[i.charCodeAt()-base]--;//value --
    }
    return true;
}