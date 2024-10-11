function rob(nums: number[]): number {
    const n= nums.length;
    if(n === 1)return nums[0];
    const temp1 = nums.slice(0,n-1);
    const temp2 = nums.slice(1);
    return Math.max(maxSum(temp1),maxSum(temp2));
};


function maxSum(nums: number[]): number {
    if(nums.length === 1)return nums[0];
    let prev2 = nums[0];
    let prev1 = Math.max(0 + nums[1], prev2);
    for (let i = 2; i < nums.length; i++) {
        const current = Math.max(prev2 + nums[i], prev1);
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
};