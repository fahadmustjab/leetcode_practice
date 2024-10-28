function findDuplicate(nums: number[]): number {
    nums.sort();
    for(let i =1 ;i <=nums.length;i++){
        if(nums[i-1] == nums[i])return nums[i-1];
    }
    return -1
};