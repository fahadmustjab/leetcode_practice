function uniquePaths(m: number, n: number): number {
    const dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(-1);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let up = 0, left = 0;
            if (i === 0 && j === 0) {
                dp[0][0] = 1;
            } else {
                if (i > 0) {
                    up = dp[i - 1][j]
                }
                if (j > 0) {
                    left = dp[i][j - 1];
                }
                dp[i][j] = up + left;
            }

        }
    }
    return dp[m - 1][n - 1];
};