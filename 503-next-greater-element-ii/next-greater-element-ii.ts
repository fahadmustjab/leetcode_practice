function nextGreaterElements(nums: number[]): number[] {
    const stack = [];
    const n = nums.length;
    let nge = Array(n);
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (stack.length > 0 && stack.at(-1) <= nums[i % n]) {
            stack.pop();
        }
        if (i < n) {
            nge[i] = stack.length === 0 ? -1 : stack.at(-1);
        }
        stack.push(nums[i % n]);
    }
    return nge;
};