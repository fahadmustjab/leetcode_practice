function longestPalindrome(s: string): number {
    let hashMap: Record<string,number> = {},count=0,n=s.length;
    for(let i =0;i<n;i++){
        hashMap[s[i]] = (hashMap[s[i]] || 0) +1;
        
    }
    for(const [key,value] of Object.entries(hashMap)){
        if(value %2 != 0)count++;
    }
    if(count>1){
        return n-count+1;
    }
    return n;
};