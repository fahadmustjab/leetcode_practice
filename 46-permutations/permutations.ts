function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const n = nums.length;
    function permute(ind: number, perms: number[], map: Map<number, boolean>) {
        if (perms.length === n) {
            result.push([...perms]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (!map.get(nums[i])) {
                perms.push(nums[i]);
                map.set(nums[i], true);
                permute(i + 1, perms, map);
                perms.pop();
                map.set(nums[i], false);
            }
        }
    }
    const map: Map<number, boolean> = new Map();
    permute(0, [], map);
    return result;
};