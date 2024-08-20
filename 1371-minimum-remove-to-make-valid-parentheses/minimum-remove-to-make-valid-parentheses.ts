function minRemoveToMakeValid(s: string): string {
    let t = s.split('');
    let stack = [];
    console.log(t);
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (char === '(') {
            stack.push(i);
        } else if (char === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else { t[i] = '' }
        }
    }
    while (stack.length > 0) {
        t[stack.pop()!] = '';
    }
    return t.join('');
};