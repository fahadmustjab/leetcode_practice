function longestCommonPrefix(strs: string[]): string {
    let prefix = "",n=strs.length,left=0;
    strs.sort();
    for(let j =0;j <strs[left].length;j++){
        if(strs[left][j] !== strs[n-1][j]){
            break;
        }
        prefix += strs[left][j];
    }
    return prefix;   
};