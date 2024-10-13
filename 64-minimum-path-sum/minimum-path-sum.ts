function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array(m).fill(0).map(() => Array(n).fill(-1));
    function backtrack(i: number, j: number) {
        if (i < 0 || j < 0) return Number.MAX_SAFE_INTEGER;
        if (i === 0 && j === 0) {
            return grid[0][0];
        }
        if(dp[i][j] != -1)return dp[i][j];

        const left = backtrack(i - 1, j);
        const up = backtrack(i, j - 1);
        return dp[i][j] = grid[i][j] + Math.min(up,left);
    }
    return backtrack(m - 1, n - 1);
};