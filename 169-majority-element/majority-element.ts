function majorityElement(nums: number[]): number {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
        if (map.get(nums[i]) > Math.floor(nums.length / 2)) {
            return nums[i];
        }
    }
    return -1;
};