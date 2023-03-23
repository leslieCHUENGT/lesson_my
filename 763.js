var partitionLabels = function(s) {
    let hash = {}
    for(let i = 0; i < s.length; i++) {
        hash[s[i]] = i
    }
    let result = []
    let left = 0
    let right = 0
    for (let i = 0; i < s.length; i++) {
        console.log(right,"----", hash[s[i]])
        right = Math.max(right, hash[s[i]])

        if(right === i) {
            result.push(right - left + 1)
            left = i + 1
        }
    }
    return result
};
// partitionLabels("ababcbacadefegdehijhklij")
let s = "ababcbacadefegdehijhklij";
let hash = {}
for(let i = 0; i < s.length; i++) {
    hash[s[i]] = i
}
console.log(hash)