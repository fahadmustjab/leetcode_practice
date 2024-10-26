function countBits(n: number): number[] {
    let count = Array(n+1).fill(0);
    for (let i = 0; i <= n; i++) {
        count[i] = count[i >> 1] + (i & 1);
    }
    return count;
};

