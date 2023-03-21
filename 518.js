const change = (amount, coins) => {
    let dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let i =0; i < coins.length; i++) {
        for(let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
        console.log(dp)
    }
    return dp[amount];
}
const change1 = (amount, coins) => {
    let dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let j = 0; j <= amount; j++) {
        for(let i = 0; i < coins.length; i++) {
            dp[j] += dp[j - coins[i]];
        }
        console.log(dp)
    }
    return dp[amount];
}

change(5, [1, 2, 5]);
// change1(5, [1, 2, 5]);