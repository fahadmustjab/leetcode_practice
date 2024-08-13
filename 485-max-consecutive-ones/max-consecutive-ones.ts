function findMaxConsecutiveOnes(nums: number[]): number {
    let n = nums.length, max = 0, maxHere = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            max = Math.max(max,maxHere+1);
            maxHere++;
        }else{
            maxHere=0;
        }
    }
    return max;
};