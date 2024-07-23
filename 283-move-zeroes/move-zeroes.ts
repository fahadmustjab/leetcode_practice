/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let k = 0,i=0;
    while(i < nums.length){
        if(nums[i] !== 0){
            nums[k] = nums[i];
            k++;
        }
        i++;
    }
    while(k < nums.length){
        nums[k] = 0;
        k++;
    }
};