function tribonacci(n: number): number {
    if(n === 0)return 0;
    if(n <= 2)return 1;
    const dp = Array(n).fill(1);
    dp[0] = 0;
    for(let i = 3; i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }
    return dp[n];
};