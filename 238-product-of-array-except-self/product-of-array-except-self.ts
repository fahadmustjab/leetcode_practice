function productExceptSelf(nums: number[]): number[] {
    let prefix = 1;
    let ans = Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        ans[i] = prefix;
        prefix = prefix * nums[i];
    }
    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] = ans[i] * suffix;
        suffix = nums[i] * suffix;
    }
    return ans;
};