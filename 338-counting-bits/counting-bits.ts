function countBits(n: number): number[] {
    let count: number[] = [];
    for (let i = 0; i <= n; i++) {
        count.push(util(i));
    }
    return count;
};

function util(i: number) {
    let count = 0;
    while (i != 0) {
        i = i & (i - 1);
        count++;
    }
    return count;
}