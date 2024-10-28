function singleNumber(nums: number[]): number {
    nums.sort();
    for (let i = 1; i < nums.length; i += 3) {
        if (nums[i] != nums[i - 1]) {
            return nums[i - 1];
        }
    }
    return nums[nums.length - 1];
};