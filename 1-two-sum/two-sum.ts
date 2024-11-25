function twoSum(nums: number[], target: number): number[] {
    const pairs: [number, number][] = nums.map((num, index) => [num, index]);
    pairs.sort((a, b) => a[0] - b[0]);
    let l = 0, r = pairs.length - 1;
    while (l < r) {
        const sum = pairs[l][0] + pairs[r][0];
        if (sum === target) {
            return [pairs[l][1], pairs[r][1]];
        } else if (sum > target) {
            r--;
        } else {
            l++;
        }
    }
    return [];
};