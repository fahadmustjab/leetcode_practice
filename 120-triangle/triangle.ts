function minimumTotal(triangle: number[][]): number {
    const m = triangle.length;
    const dp = Array(m).fill(0).map(() => Array(m).fill(-1));
    for(let i =0;i < triangle[m-1].length;i++){
        dp[m-1][i] = triangle[m-1][i];
    }
    for(let i =m-2; i >=0;i--){
        for(let j =0;j <triangle[i].length;j++){
            dp[i][j] = triangle[i][j] + Math.min(dp[i+1][j],dp[i+1][j+1]);
        }
    }
    return dp[0][0];
};