function findMaxConsecutiveOnes(nums: number[]): number {
    let n = nums.length, l = 0, r = 0, max = 0;
    while (r < n) {
        if (nums[r] === 1) {
            max = Math.max(max, r - l + 1);
        } else {
            l=r+1;
        }
        r++;
    }
    return max;
};