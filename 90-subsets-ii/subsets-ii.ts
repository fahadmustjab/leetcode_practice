function subsetsWithDup(nums: number[]): number[][] {
    const result: number[][] = [];
    const n = nums.length;
    nums.sort();
    function dfs(ind: number, subset: number[]) {
        result.push([...subset]);
        for (let i = ind; i < n; i++) {
            if(i > ind && nums[i] === nums[i-1])continue;
            subset.push(nums[i]);
            dfs(i + 1, subset);
            subset.pop();
        }
    }
    dfs(0, []);
    return result;
};