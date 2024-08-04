function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let mid = Math.floor(s.length/2);
    let left=mid-1;
    let right = s.length %2 ===0 ? mid : mid+1;
    while(left>=0 && right < s.length){
        if(s[left] !== s[right])return false;
        left--;
        right++;
    }
    return true;
};