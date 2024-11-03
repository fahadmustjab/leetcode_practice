function longestOnes(nums: number[], k: number): number {
    const n = nums.length;
    let max = 0, l = 0, r = 0, zeros = 0;
    while (r < n) {
        if (nums[r] === 0) {
            zeros++;
        }
        if (zeros > k) {
            if (nums[l] === 0) zeros--;
            l++;
        }
        if (zeros <= k) {
            max = Math.max(max, r - l + 1);
        }
        r++;
    }
    return max;
};