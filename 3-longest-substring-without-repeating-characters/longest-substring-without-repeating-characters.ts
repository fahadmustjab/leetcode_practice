function lengthOfLongestSubstring(s: string): number {
    if(s.length <=1)return s.length;
    let max = 0,hashMap = {},p=0;
    for(let i =0; i< s.length;i++){
        const prevChar = hashMap[s[i]];
        if(prevChar >=p){
            p = prevChar+1;
        }
        hashMap[s[i]] = i;
        max = Math.max(max,i-p+1);
    }
    return max;
};