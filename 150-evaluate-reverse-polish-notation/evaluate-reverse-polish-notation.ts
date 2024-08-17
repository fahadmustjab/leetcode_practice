function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        
        if (["+", "-", "*", "/"].includes(token)) {
            const a = stack.pop()!;
            const b = stack.pop()!;
            let result: number;

            if (token === "+") result = b + a;
            else if (token === "-") result = b - a;
            else if (token === "*") result = b * a;
            else result = Math.trunc(b / a); // Use Math.trunc to avoid floating-point issues

            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop()!;
}
