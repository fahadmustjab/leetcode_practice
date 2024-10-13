function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array(m).fill(0).map(() => Array(n).fill(-1));
    dp[0][0] = grid[0][0];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[0][0] = grid[i][j];
            } else {
                const left = grid[i][j] + ( i > 0 ? dp[i - 1][j]: Number.MAX_SAFE_INTEGER);
                const right = grid[i][j] + (j > 0 ?  dp[i][j - 1]: Number.MAX_SAFE_INTEGER);
                dp[i][j] = Math.min(left, right);
            }

        }
    }
    return dp[m - 1][n - 1];
};