function lengthOfLongestSubstring(s: string): number {
    let max=0,p=0;
    let charSet = new Set<string>();

    for(let i =0 ; i < s.length ;i++){
        while(charSet.has(s[i])){
            charSet.delete(s[p]);
            p++;
        }
        charSet.add(s[i]);
        max = Math.max(max,i-p+1);
    }
    return max;
};