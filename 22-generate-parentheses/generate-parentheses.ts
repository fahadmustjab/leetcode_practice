function generateParenthesis(n: number): string[] {
    const result = [];
    backtrack(n, 0, 0, "", result);
    return result;
};

const backtrack = (n: number, open: number, closed: number, str: string, result: string[]) => {
    if (open === n && closed === n) {
        result.push(str);
        return;
    }
    if (open < n) {
        backtrack(n, open + 1, closed, str + '(', result);
    }
    if (closed < open) {
        backtrack(n, open, closed + 1, str + ')', result);
    }
}