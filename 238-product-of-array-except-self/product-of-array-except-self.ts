function productExceptSelf(nums: number[]): number[] {
    let result = Array.from({ length: nums.length }, () => 1),suffix = 1;
    for(let i = 1; i < nums.length;i++){
        result[i] = nums[i-1] * result[i-1];
    }

    for(let i = nums.length-1; i >= 0;i--){
        result[i] = suffix*result[i];
        suffix=suffix * nums[i];
    }
    return result;
};