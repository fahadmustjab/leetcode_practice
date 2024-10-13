function minFallingPathSum(matrix: number[][]): number {
    const m = matrix.length;
    const n = matrix[0].length;
    let MAX_INT = Number.MAX_SAFE_INTEGER;
    let prev = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        prev[i] = matrix[0][i];
    }

    for (let i = 1; i < m; i++) {
        let cur = new Array(n).fill(0);
        for (let j = 0; j < n; j++) {
            const down = prev[j];
            const right = j < n - 1 ? prev[j + 1] : MAX_INT;
            const left = j > 0 ? prev[j - 1] : MAX_INT;
            cur[j] = matrix[i][j] + Math.min(down, right, left);
        }
        prev=cur;
    }
    return Math.min(...prev);
};