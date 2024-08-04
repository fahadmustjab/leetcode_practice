function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length)return false;
    let hashMap = {};
    for(let i =0; i< s.length;i++){
        hashMap[s[i]] = (hashMap[s[i]] || 0)+1;
        hashMap[t[i]] = (hashMap[t[i]] || 0)-1;
    }
    for(const [key,value ] of Object.entries(hashMap)){
        if(Number(value) < 0)return false;
    }
    return true;

};