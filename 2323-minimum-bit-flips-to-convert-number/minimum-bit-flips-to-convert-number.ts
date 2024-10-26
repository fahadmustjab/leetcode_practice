function minBitFlips(start: number, goal: number): number {
    let result = start ^ goal;
    let count = 0;
    while(result != 0){
        result = result & (result-1);
        count++;
    }
    return count;
};