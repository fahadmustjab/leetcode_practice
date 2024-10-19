function canPartition(nums: number[]): boolean {
    const n: number = nums.length;
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    if (totalSum % 2 != 0) return false;
    const partition = totalSum / 2;
    const dp: boolean[][] = Array.from({ length: n }, () => Array(partition + 1).fill(false));
    for (let i = 0; i < n; i++) {
        dp[i][0] = true;
    }
    if (nums[0] <= partition) {
        dp[0][nums[0]] = true;
    }
    for (let i = 1; i < n; i++) {
        for (let target = 0; target <= partition; target++) {
            const take = (target >= nums[i]) ? dp[i - 1][target - nums[i]] : false;
            const notTake = dp[i - 1][target];
            dp[i][target] = take || notTake;
        }
    }
    return dp[n - 1][partition];
};