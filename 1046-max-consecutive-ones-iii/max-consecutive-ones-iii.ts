function longestOnes(nums: number[], k: number): number {
    let max = 0, l = 0,z=0;
    for(let r=0;r<nums.length;r++){
        if(nums[r] === 0)z++;
        while(z>k){
            if(nums[l] === 0)z--;
            l++;
        }
        max=Math.max(max,r-l+1);
    }
    return max;
};