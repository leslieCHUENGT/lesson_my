const wordBreak = (s, wordDict) => {

    let dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for(let i = 0; i <= s.length; i++){
        for(let j = 0; j < wordDict.length; j++) {
            if(i >= wordDict[j].length) {
                if(s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
                    dp[i] = true
                }
            }
            
        }
        console.log(dp)
    }

    return dp[s.length];
}

wordBreak("applepenapple",["apple", "pen"])