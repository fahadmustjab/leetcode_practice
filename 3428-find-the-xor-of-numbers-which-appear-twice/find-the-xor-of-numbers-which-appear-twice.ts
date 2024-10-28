function duplicateNumbersXOR(nums: number[]): number {
    let map: Map<number,number> = new Map();
    let result = 0;
    for(let i =0;i < nums.length;i++){
        map.set(nums[i], (map.get(nums[i]) ?? 0) +1);
    }

    for(const [key,value] of map.entries()){
        if(value == 2){
            result = result ^ key;
        }
    }
    return result;
};