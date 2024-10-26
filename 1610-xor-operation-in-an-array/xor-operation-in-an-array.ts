function xorOperation(n: number, start: number): number {
    let result = 0;
    for(let i =0;i < n;i++){
        const val = start + (2 * i);
        result = result ^ val;
    }
    return result;
};