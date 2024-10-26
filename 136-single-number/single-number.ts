function singleNumber(nums: number[]): number {
    const n = nums.length;
    let result = nums[0];
    for(let i =1;i < nums.length;i++){
        result = result ^ nums[i];
    }
    return result;
};