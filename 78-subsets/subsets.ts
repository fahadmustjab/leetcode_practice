function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    const backtrack = (i: number, subset: number[]) => {
        if (i >= nums.length) {
            result.push([...subset]);
            return;
        }
        backtrack(i + 1, subset);
        subset.push(nums[i]);
        backtrack(i + 1, subset,);
        subset.pop();

    }
    backtrack(0, []);
    return result;
};