function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];
    const n: number = nums.length;
    nums.sort();
    const backtrack = (index: number, perms: number[], used: boolean[]): void => {
        if (perms.length === nums.length) {
            result.push([...perms]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (used[i] || (i > 0 && nums[i - 1] === nums[i] && !used[i - 1])) continue;
            perms.push(nums[i]);
            used[i] = true;
            backtrack(i + 1, perms, used);
            perms.pop();
            used[i] = false;

        }
    }
    const map: Map<number, boolean> = new Map();
    backtrack(0, [], new Array(n).fill(false));
    return result;
};

