function canPartition(nums: number[]): boolean {
    const n: number = nums.length;
    let sum = nums.reduce((a, b) => a + b, 0);

    // If the total sum is odd, it's impossible to partition it into two equal subsets
    if (sum % 2 !== 0) return false;

    const target = sum / 2;

    // DP array to keep track of possible sums
    const dp: boolean[] = Array(target + 1).fill(false);
    dp[0] = true; // A sum of 0 is always possible (empty subset)

    // Traverse through the numbers and update the DP array
    for (const num of nums) {
        for (let t = target; t >= num; t--) {
            dp[t] = dp[t] || dp[t - num];
        }
    }

    // The result will be whether it's possible to sum up to target
    return dp[target];
}
