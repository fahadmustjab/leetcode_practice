function permute(nums: number[]): number[][] {
    let n: number = nums.length, result: number[][] = [];
    function backtrack(index: number,perms: number[],map: Map<number,boolean>) {
        if (perms.length === nums.length) {
            result.push([...perms]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if(!map.get(nums[i])){
                map.set(nums[i],true);
                perms.push(nums[i]);
                backtrack(i+1,perms,map);
                perms.pop();
                map.set(nums[i],false);
            }
        }
    }
    const map: Map<number,boolean> = new Map();
    backtrack(0,[],map);
    return result;
};
