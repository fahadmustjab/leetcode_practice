function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length)return false;
    let hashMap = new Map<string,number>();
    for(let i =0; i< s.length;i++){
        hashMap.set(s[i], (hashMap.get(s[i]) || 0)+1);
        hashMap.set(t[i] ,(hashMap.get(t[i]) || 0)-1);
    }
    for(const [key,value ] of hashMap.entries()){
        if(value < 0)return false;
    }
    return true;

};