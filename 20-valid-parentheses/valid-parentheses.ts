function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: Record<string, string> = {
        "}": "{",
        ")": "(",
        "]": "["
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char]) {  // If the character is a closing bracket
            if (stack.pop() !== map[char]) {
                return false;
            }
        } else {  // If the character is an opening bracket
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}
