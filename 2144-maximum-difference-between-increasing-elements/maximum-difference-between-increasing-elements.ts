function maximumDifference(nums: number[]): number {
    let max = -1, min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        if (nums[i] > min) {
            max = Math.max(max, nums[i] - min);
        }

    }
    return max;
};