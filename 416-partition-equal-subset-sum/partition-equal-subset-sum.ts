function canPartition(nums: number[]): boolean {
    const n: number = nums.length;
    const target = nums.reduce((acc, num) => acc + num, 0);
    if (target % 2 != 0) return false;
    const dp: number[][] = Array.from({ length: n }, () => Array((target / 2) + 1).fill(-1));

    function backtrack(index: number, target: number) {
        if (target === 0) {
            return true;
        }
        if (index >= n || target < 0) return false;
        if (dp[index][target] != -1) return dp[index][target] === 1;
        const take = backtrack(index + 1, target - nums[index]);
        const notTake = backtrack(index + 1, target);
        dp[index][target] = (take || notTake) ? 1 : 0
        return dp[index][target] === 1;
    }
    return backtrack(0, target / 2);

};