function myPow(x: number, n: number): number {
    let pow = 1;
    if (n < 0) {
        n = -n;
        x = 1 / x;
    }

    while (n != 0) {
        if ((n & 1) != 0) {
            pow = pow * x;
        }
        x = x * x;
        n =  Math.floor(n/2);
    }
    return pow;
};