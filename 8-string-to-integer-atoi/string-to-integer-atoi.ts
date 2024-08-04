function myAtoi(s: string): number {
    let result = 0, negative = 1, i = 0, n = s.length;
    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;

    while (s[i] === ' ') i++;
    if (i < s.length && (s[i] === '-' || s[i] === '+')) {
        negative = s[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < s.length) {
        if (s[i] >= '0' && s[i] <= '9') {
            const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
            if (result > Math.floor(MAX_INT / 10) || result === Math.floor(MAX_INT / 10) && digit > 7) {
                return negative === 1 ? MAX_INT : MIN_INT;
            }
            result = digit + result * 10;

        } else {
            break;
        }
        i++;
    }
    return negative * result;
};