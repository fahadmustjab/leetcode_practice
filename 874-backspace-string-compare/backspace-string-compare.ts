function backspaceCompare(s: string, t: string): boolean {
    const finalString = (input: string): string => {
        let stack: string[] = [];
        for (let char of input) {
            if (char === '#') {
                stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    };
    
    return finalString(s) === finalString(t);
}
