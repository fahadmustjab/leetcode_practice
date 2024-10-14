function cherryPickup(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const INT_MIN = Number.MIN_SAFE_INTEGER;
    const dp = Array(m).fill(-1).map(() => Array(n).fill(-1).map(() => Array(n).fill(-1))); 
    function backtrack(i: number, j: number, y: number) {
        if (j < 0 || j >= n || y < 0 || y >= n || i >= m) return INT_MIN;

        if (i === m - 1) {
            if (j === y) {
                return grid[i][y];
            }
            return grid[i][j] + grid[i][y];
        }
        if(dp[i][j][y] != -1)return dp[i][j][y];

        let maximum = INT_MIN;

        for (let r1 = -1; r1 < 2; r1++) {
            for (let r2 = -1; r2 < 2; r2++) {
                let value = 0;
                if (j === y) {
                    value = grid[i][j]
                } else {
                    value = grid[i][j] + grid[i][y];
                }
                value +=   backtrack(i + 1, j + r1, y + r2);
                maximum = Math.max(value,maximum);
            }
        }
        return dp[i][j][y] = maximum;
    }
    return backtrack(0, 0, n - 1);

};