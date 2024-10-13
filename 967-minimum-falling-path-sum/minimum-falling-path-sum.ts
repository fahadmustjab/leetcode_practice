function minFallingPathSum(matrix: number[][]): number {
    const m = matrix.length;
    const n = matrix[0].length;
    let MAX_INT = Number.MAX_SAFE_INTEGER;
    let dp = new Array(m).fill(0).map(() => Array(n).fill(0));

    for(let i =0;i < n;i++ ){
        dp[m-1][i] = matrix[m-1][i];
    }

    for(let i =m-2;i>=0;i--){
        for(let j =0; j < n;j++){
            const down = dp[i+1][j];
            const right = j < n-1 ? dp[i+1][j+1] : MAX_INT;
            const left = j > 0 ? dp[i+1][j-1]: MAX_INT;
            dp[i][j] = matrix[i][j] + Math.min(down,right,left);
        }
    }
    return Math.min(...dp[0]);
};