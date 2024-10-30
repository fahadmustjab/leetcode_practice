function findKOr(nums: number[], k: number): number {
    let result =0;
    for(let i =0;i < 31;i++){
        let count = 0;
        for(let j =0;j < nums.length;j++){
            if(nums[j] & (1 << i)){
                count++;
            }
        }
        if(count >=k){
            result = result | (1 << i);
        }

    }
    return result;
};