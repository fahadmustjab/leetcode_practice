function majorityElement(nums: number[]): number {
    let majorityNumber = nums[0], count = 1, n = nums.length;
    for (let i = 1; i < n; i++) {
        if (count === 0) {
            count++;
            majorityNumber = nums[i];
        } else if (nums[i] === majorityNumber) count++;
        else {
            count--;
        }
    }
    return majorityNumber;
};