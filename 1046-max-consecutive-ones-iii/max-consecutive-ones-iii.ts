function longestOnes(nums: number[], k: number): number {
    let max = 0, l = 0,r=0, z = 0;
    for ( r = 0; r < nums.length; r++) {
        if (nums[r] === 0) k--;
        if (k < 0) {
            if(nums[l] === 0)k++;
            l++;
        }
    }
    return r - l ;
};