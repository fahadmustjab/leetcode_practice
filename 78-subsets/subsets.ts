function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    const n = nums.length;
    const subsets = 1 << n;
    for (let i = 0; i < subsets ; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                temp.push(nums[j]);
            }
        }
        result.push(temp);
    }
    return result;
};