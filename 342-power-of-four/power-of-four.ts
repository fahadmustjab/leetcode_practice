function isPowerOfFour(n: number): boolean {
    return n > 0 && (n === 1 || (n %4 === 0 && isPowerOfFour(n/4)));
};