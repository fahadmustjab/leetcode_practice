function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let n = s.length;
    let left=0,right=n-1;
    while(left <= right){
        if(s[left] !== s[right])return false;
        right--;
        left++;
    }
    return true;
};