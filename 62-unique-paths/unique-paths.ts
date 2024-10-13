function uniquePaths(m: number, n: number): number {
    const dp = new Array(m);
    for(let i =0;i < m;i++){
        dp[i] = new Array(n).fill(-1);
    }
    function backtrack(i: number, j: number) {
        if (i === 0 && j === 0)return 1;
        if (i < 0 || j < 0) return 0;
        if(dp[i][j] != -1)return dp[i][j];
        const a = backtrack(i - 1, j);
        const b = backtrack(i, j - 1);
        return dp[i][j] = a + b;
    }
    return backtrack(m - 1, n - 1);
};