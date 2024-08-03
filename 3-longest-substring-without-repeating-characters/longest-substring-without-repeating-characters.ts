function lengthOfLongestSubstring(s: string): number {
    let max=0,p=0;
    let hashMap = {};

    for(let i =0 ; i < s.length ;i++){
        if(hashMap[s[i]]>-1){
            p = Math.max(p,hashMap[s[i]]+1);
        }
        hashMap[s[i]] = i;
        max = Math.max(max,i-p+1);
    }
    return max;
};