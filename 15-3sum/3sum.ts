function threeSum(nums: number[]): number[][] {
    let n = nums.length;
    let result: number[][] = [];
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < n - 2; i++) { // Iterate up to n-2
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue; // Skip duplicate elements
        }
        let j = i + 1;
        let k = n - 1;
        let first = nums[i];
        while (j < k) {
            let sum = first + nums[j] + nums[k];
            if (sum === 0) {
                result.push([first, nums[j], nums[k]]);
                while (j < k && nums[j] == nums[j + 1]) j++; // Skip duplicates
                while (j < k && nums[k] == nums[k - 1]) k--; // Skip duplicates
                j++;
                k--;
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return result;
}
