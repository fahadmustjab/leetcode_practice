function findAnagrams(s: string, p: string): number[] {
    let n1 = s.length, n2 = p.length;
    if (n2 > n1) return [];

    let result: number[] = [];
    let hashMap = new Map<string, number>();
    let examineMap = new Map<string, number>();

    // Populate the hashMap with the frequency of characters in p
    for (let i = 0; i < n2; i++) {
        hashMap.set(p[i], (hashMap.get(p[i]) || 0) + 1);
        examineMap.set(s[i], (examineMap.get(s[i]) || 0) + 1);
    }

    // Check the initial window
    if (compare(hashMap, examineMap)) {
        result.push(0);
    }

    // Slide the window over the string s
    for (let i = n2; i < n1; i++) {
        let startChar = s[i - n2];
        let endChar = s[i];

        // Update the examineMap for the new end character of the current window
        examineMap.set(endChar, (examineMap.get(endChar) || 0) + 1);

        // Remove the start character of the previous window
        if (examineMap.get(startChar) === 1) {
            examineMap.delete(startChar);
        } else {
            examineMap.set(startChar, (examineMap.get(startChar) || 0) - 1);
        }

        // Compare maps and add the starting index of the current window if they match
        if (compare(hashMap, examineMap)) {
            result.push(i - n2 + 1);
        }
    }

    return result;
}

function compare(hashMap: Map<string, number>, examineMap: Map<string, number>): boolean {
    if (hashMap.size !== examineMap.size) return false;
    for (const [key, value] of hashMap) {
        if (examineMap.get(key) !== value) {
            return false;
        }
    }
    return true;
}

// Example usage:
// console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
