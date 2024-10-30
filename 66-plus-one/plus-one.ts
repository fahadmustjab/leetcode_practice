function plusOne(digits: number[]): number[] {
    let n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        }
        digits[i] = 0;
    }
    let newArray = Array(n+1).fill(0);
    newArray[0] = 1;
    console.log(newArray);
    return newArray;
};