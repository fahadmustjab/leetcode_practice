function fib(n: number, memo: Record<number, number> = {}): number {
    // Check if the value has already been computed
    if (n in memo) return memo[n];

    // Base cases
    if (n <= 1) return n;

    // Compute and store the result in the memo
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
}
