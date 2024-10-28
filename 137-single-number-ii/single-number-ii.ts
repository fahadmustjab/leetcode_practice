function singleNumber(nums: number[]): number {
    let result = 0;
    for(let i =0;i < 32;i++){
        let count =0;
        for(let j =0;j < nums.length;j++){
            if(nums[j] & (1 << i)){
                count++;
            }
        }
        if(count % 3 === 1){
            result = result | (1 << i);
        }
    }
    return result;
};