function lengthOfLongestSubstring(s: string): number {
    let longest=0;
    if(s.length <= 1)return s.length
    for(let i =0; i < s.length;i++){
        let charSet = {},len = 0;
        for(let j =i; j < s.length;j++){
            const currentChar = s[j];
            if(!charSet[currentChar]){
                len++;
                charSet[currentChar] = true;
                longest = Math.max(longest,len);
            }else{
                break;
            }
        }
    }
    return longest;
};