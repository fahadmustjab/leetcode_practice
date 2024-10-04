function combinationSum2(candidates: number[], target: number): number[][] {

    const result: number[][] = [];
    const n: number = candidates.length;
    candidates.sort((a, b) => a - b);

    function dfs(i: number, target: number, subset: number[]) {
        if (target < 0) return;
        if (target === 0) {
            result.push([...subset]);
            return;
        };
        for (let j = i; j < candidates.length; j++) {
            if (j > i && candidates[j] === candidates[j - 1]) continue;
            if (candidates[j] > target) break;

            subset.push(candidates[j]);
            dfs(j + 1, target - candidates[j], subset);
            subset.pop();
        }
    }
    dfs(0, target, []);
    return result;
};