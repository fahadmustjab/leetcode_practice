function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const second = target - nums[i];
        if (hashMap.get(second) >= 0 && hashMap.get(second) != i) {
            return [i, hashMap.get(second)];
        }
        hashMap.set(nums[i], i);
    }
    return [-1, -1];
};