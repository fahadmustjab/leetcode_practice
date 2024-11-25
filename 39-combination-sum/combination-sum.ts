function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    function helper(index: number, perms: number[], sum: number) {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            result.push([...perms]);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            perms.push(candidates[i]);
            helper(i, perms, sum + candidates[i]);
            perms.pop();
        }
    }
    helper(0, [], 0);
    return result;
};