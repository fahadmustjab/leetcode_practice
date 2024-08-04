function validPalindrome(s: string): boolean {
    const isPalindrome = (str: string,left:number,right:number):boolean =>{
        while(left < right){
            if(s[left] !== s[right])return false;
            left++;
            right--;
        }
        return true;
    }
    const n = s.length;
    let left=0,right=n-1;
    while(left<right){
        if(s[left] !== s[right])return isPalindrome(s,left+1,right) || isPalindrome(s,left,right-1);
        left++;
        right--;
    }

    return true;
}

function removeCharAt(s: string, index: number): string {
    return s.slice(0, index) + s.slice(index + 1);
}
