function numberOfSubstrings(s: string): number {
    const n = s.length;
    let l = 0, r = 0, maxCount = 0;
    let arr = Array(3).fill(-1);
    while (r < n) {
        arr[s[r].charCodeAt(0)-'a'.charCodeAt(0)] = r;
        if(arr[0] > -1 &&  arr[1] > -1 && arr[2] > -1){
            const min = Math.min(arr[0],arr[1],arr[2]);
            maxCount += min+1;
        }
        r++;
    }
    return maxCount;
};