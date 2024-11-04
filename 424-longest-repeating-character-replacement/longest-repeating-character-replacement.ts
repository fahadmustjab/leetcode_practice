function characterReplacement(s: string, k: number): number {
    const n = s.length;
    let maxLen = 0, l = 0, r = 0, hash = Array(26).fill(0), maxFrequency = 0, maxChanges = 0;
    while (r < n) {
        const index = s[r].charCodeAt(0) - 'A'.charCodeAt(0);
        hash[index] += 1;
        maxFrequency = Math.max(maxFrequency, hash[index]);

        if ((r - l + 1) - maxFrequency > k) {
            maxFrequency = 0;
            for (const value of hash) {
                maxFrequency = Math.max(maxFrequency, value);
            }
            const index = s[l].charCodeAt(0) - 'A'.charCodeAt(0);
            hash[index] -= 1;
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    return maxLen;
};