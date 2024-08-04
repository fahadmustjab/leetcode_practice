function validPalindrome(s: string): boolean {
    const n = s.length;
    if (n <= 2) return true;
    let left = 0, right = n - 1;
    while (left <= right) {
        if (s[left] !== s[right] ) {
            const string1 = removeCharAt(s, left);
            const string2 = removeCharAt(s, right);
            if(n<=3)return false;
            else if(isPalindrome(string1))return true;
            else if(isPalindrome(string2))return true;
            else return false;
        }
        left++;
        right--;
    }
    return true;
};

function isPalindrome(s: string): boolean {
    let n = s.length;
    let left=0,right=n-1;
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    while(left <= right){
        if(s[left] !== s[right])return false;
        right--;
        left++;
    }
    return true;
};


function removeCharAt(s: string, index: number): string {
    return s.slice(0, index) + s.slice(index + 1);
}
