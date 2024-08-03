function processBackspaces(input: string): string {
    let k = 0;
    let result = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "#") {
            k = Math.max(0, --k);
            result = result.slice(0, k);
        } else {
            result += input[i];
            k++;
        }
    }

    return result;
}

function backspaceCompare(s: string, t: string): boolean {
    return processBackspaces(s) === processBackspaces(t);
}