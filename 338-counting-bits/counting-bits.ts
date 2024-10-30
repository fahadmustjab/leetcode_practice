function countBits(n: number): number[] {
    let result = [];
    for(let i =0;i <= n;i++){
        result.push(util(i));
    }
    return result;
};

function util(n: number): number{
    let count =0;
    while(n){
        n = n & (n-1);
        count++;
        n=n >> 1;
    }
    return count;
}