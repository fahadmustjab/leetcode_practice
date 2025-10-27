function climbStairs(n: number): number {
    if (n <= 1) return 1;
    let prev = 1;
    let next = 1;
    for(let i =2; i<=n;i++){
        const current = next + prev;
        prev = next;
        next = current;
    }
    return next;
};