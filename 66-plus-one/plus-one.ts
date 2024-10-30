function plusOne(digits: number[]): number[] {
    let n = digits.length-1,carry=1;
    let result = [];
    while(n>=0 ){
        let sum = digits[n]+carry;
        digits[n] = sum%10;
        result.push(digits[n]);
        carry = Math.floor(sum/10);
        n--;

    }
    if(carry){
        result.push(carry);
    }
    let l = 0,r=result.length-1;
    while(l < r){
        [result[l],result[r]] = [result[r],result[l]];
        r--;
        l++;
    }
    return result;
};