function groupAnagrams(strs: string[]): string[][] {
    let result: string[][] = [], hashMap: Record<string,string[]> = {};
    for (let i = 0; i < strs.length; i++) {
        const originalString = strs[i];
        const sortedString = originalString.split('').sort().join('');
        if (!hashMap[sortedString]) {
            hashMap[sortedString] = [];
        }
        hashMap[sortedString].push(strs[i]);
    }
    for (const [key, value] of Object.entries(hashMap)) {
        result.push(value);
    }
    return result;

};