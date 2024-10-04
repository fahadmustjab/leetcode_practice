function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    const n = candidates.length;
    const backtrack = (i: number, subset: number[], target: number) => {
        if(target < 0){
            return;
        }
        if (i > n - 1) {
            if (target === 0) {
                result.push([...subset]);
            }
            return;
        }


        subset.push(candidates[i]);
        backtrack(i, subset, target - candidates[i]);
        subset.pop();
        backtrack(i + 1, subset, target);
    }
    backtrack(0, [], target);
    return result;
};