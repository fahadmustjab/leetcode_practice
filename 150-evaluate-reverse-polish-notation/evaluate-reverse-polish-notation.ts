function evalRPN(tokens: string[]): number {
    let stack: number[] = [];
    for (const char of tokens) {
        if (["+", "-", "*", "/"].includes(char)) {
            const a = stack.pop();
            const b = stack.pop();
            let ans;
            if (char === '+') ans = a + b;
            else if (char === "-") ans = b - a;
            else if (char === "*") ans = a * b;
            else ans = Math.trunc(b / a);

            stack.push(Number(ans));
        } else {
            stack.push(Number(char));
        }
    }
    return stack.pop();
};
