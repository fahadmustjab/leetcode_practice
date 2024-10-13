function minimumTotal(triangle: number[][]): number {
    const m = triangle.length;
    const dp: number[][] = Array.from({ length: m }, (_, i) => Array(i + 1).fill(-1));
    function backtrack(i: number, j: number) {
        if (i === m - 1) {
            return triangle[m - 1][j];
        }
        if (dp[i][j] != -1) return dp[i][j];
        const down = backtrack(i + 1, j);
        const diagonal = backtrack(i + 1, j + 1);
        return dp[i][j] = triangle[i][j] + Math.min(down, diagonal);
    }
    return backtrack(0, 0);
};