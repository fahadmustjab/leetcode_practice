function climbStairs(n: number): number {
    if (n <= 1) return 1;
    const dp = Array(n).fill(1);
    for(let i =2; i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};