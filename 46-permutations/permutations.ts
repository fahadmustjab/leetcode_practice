function permute(nums: number[]): number[][] {
    let n: number = nums.length,result: number[][] = [];
    function backtrack(index: number){
        if(index >= nums.length){
            result.push([...nums]);
            // console.log(nums);
            return;
        }
        for(let i = index;i < n;i++){
            swap(nums,i,index);
            backtrack(index+1);
            swap(nums,i,index);
        }
    }
    backtrack(0);
    return result;
};

function swap(nums: number[], i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}