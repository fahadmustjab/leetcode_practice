function subarraysWithKDistinct(nums: number[], k: number): number {
    return util(nums, k) - util(nums, k - 1);

};

function util(nums: number[], k: number) {
    let n = nums.length, hash = new Map(), maxCount = 0, l = 0, r = 0;
    while (r < n) {
        hash.set(nums[r], (hash.get(nums[r]) ?? 0) + 1);
        while (hash.size > k) {
            hash.set(nums[l], (hash.get(nums[l])) - 1);
            if (hash.get(nums[l]) == 0) {
                hash.delete(nums[l]);
            }
            l++;
        }
        maxCount = maxCount + (r - l + 1);
        r++;
    }
    return maxCount;
}