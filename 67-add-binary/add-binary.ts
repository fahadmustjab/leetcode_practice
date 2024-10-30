function addBinary(a: string, b: string): string {
    let i = a.length -1,j = b.length -1,carry=0,result="";
    while(i >=0 || j >=0 || carry > 0){
        let bitA = i >= 0 ? Number(a[i]) : 0;
        let bitB = j >= 0 ? Number(b[j]) : 0;

        let sum =bitA + bitB + carry;
        carry = Math.floor(sum/2);
        result =  String(sum %2) + result;
        i--;
        j--;
    }
    return result;
};