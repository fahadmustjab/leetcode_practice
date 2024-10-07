function letterCombinations(digits: string): string[] {
    const result: string[] = [];
    const dict: Record<number,string> = {
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz"
    };
    if (!digits.length) {
        return result;
    }
    function backtrack(ind: number,strings: string[],dict: Record<number,string>,){
        if(strings.length === digits.length){
            result.push(strings.join(''));
            return;
        }

          

        for(let i = 0; i < dict[digits[ind]].length;i++){
            const letter = dict[digits[ind]][i];
            strings.push(letter);
            backtrack(ind+1,strings,dict);
            strings.pop();
        }

    }
    backtrack(0,[],dict);
    return result;
};