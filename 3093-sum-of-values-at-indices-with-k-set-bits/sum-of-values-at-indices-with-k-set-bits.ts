function sumIndicesWithKSetBits(nums: number[], k: number): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        const r = util(i)
        if (r === k) result += nums[i];
    }
    return result;
};

function util(i: number) {
    let count = 0;
    while (i != 0) {
        i = i & (i - 1);
        count++;
    }
    return count;
}
