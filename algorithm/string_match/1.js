const WordDictionary = function () {
    this.words = {}
}
WordDictionary.prototype.addWord = (word) => {
    if (this.words[word.length]) {
        this.words[word.length].push(word)
    } else {
        this.words[word.length] = [word]//设置二维数组
    }
}
WordDictionary.prototype.search = (word) => {
    if (!this.words[word.length]) {
        return false
    }
    const len = word.length
    if (!word.includes('.')) {
        return this.words[len].includes(word)
    }
    const reg = new RegExp(word)//正则
    return this.words[len].some((item) => {
        return reg.test(item)
    })
}