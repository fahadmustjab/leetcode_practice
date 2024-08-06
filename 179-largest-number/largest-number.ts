function largestNumber(nums: number[]): string {
    //greedy ;arrays; sorting
    // let result = "";
    // for (let i = 0; i < nums.length; i++) {
    //     const cur_sum1 = String(nums[i])+result;
    //     const cur_sum2 = result+ String(nums[i]);
    //     if(Number(cur_sum1) > Number(cur_sum2)){
    //         result = String(cur_sum1);
    //     }else{
    //         result = String(cur_sum2);

    //     }
    // }
    let strNums = nums.map(String);
    strNums.sort((a,b) => (b+a).localeCompare(a+b));
    let result = strNums.join('');

    return result[0] === '0' ? '0': result;
};