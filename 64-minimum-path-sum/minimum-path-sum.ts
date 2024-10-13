function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let prev = Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        const cur = Array(n).fill(0);
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                cur[j] = grid[i][j];
            } else {
                const left = grid[i][j] + (i > 0 ? prev[j] : Number.MAX_SAFE_INTEGER);
                const up = grid[i][j] + (j > 0 ? cur[j - 1] : Number.MAX_SAFE_INTEGER);
                cur[j] = Math.min(left, up);
            }

        }
        prev = cur.slice();
    }
    return prev[n- 1];
};