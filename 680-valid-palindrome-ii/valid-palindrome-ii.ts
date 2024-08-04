function validPalindrome(s: string): boolean {
    // Helper function to check if a substring is a palindrome
    const isPalindrome = (str: string, left: number, right: number): boolean => {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
}
