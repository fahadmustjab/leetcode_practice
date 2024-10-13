function uniquePaths(m: number, n: number): number {
    // Initialize dp array of size n (to represent a single row) with all elements as 1
    let dp = new Array(n).fill(1);

    // Update dp for each row starting from the second row
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1]; // Add the number of ways from the top (dp[j]) and left (dp[j - 1])
        }
    }

    return dp[n - 1];
}
