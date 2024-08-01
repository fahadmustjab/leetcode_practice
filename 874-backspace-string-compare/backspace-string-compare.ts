function backspaceCompare(s: string, t: string): boolean {
    let arr1 = [],arr2=[];
    for(let i =0; i <s.length;i++){
        if(isAlphaNumeric(s[i])){
            arr1.push(s[i]);
        }else{
            arr1.pop()
        }
    }
    
    for(let i =0; i <t.length;i++){
        if(isAlphaNumeric(t[i])){
            arr2.push(t[i]);
        }else{
            arr2.pop()
        }
    }
    return JSON.stringify(arr1) ===JSON.stringify(arr2);
};

function isAlphaNumeric(str: string): boolean {
    const regex = /^[a-z0-9]+$/i;
    return regex.test(str);
}