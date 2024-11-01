function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0,l =0,r=0;
    let count = 0;
    while(r < nums.length){
        if(nums[r] === 1){
            max = Math.max(max,r-l+1);
        }else{
            l=r+1;
        }
        r++;
    }
    return max;
};