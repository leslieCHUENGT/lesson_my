var numSquares = function(n) {
    let dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    for(let i = 1; i*i <= n; i++) {
        let val = i*i
        for(let j = val; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - val] + 1)
        }
        console.log(dp)
    }
    return dp[n]
};
numSquares(64)

