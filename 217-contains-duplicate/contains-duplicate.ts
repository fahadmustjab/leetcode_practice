function containsDuplicate(nums: number[]): boolean {
    const numsHash = {};
    for (const num of nums) {
        if (numsHash[num]) return true;
        numsHash[num] = true;
    }
    return false;
}
