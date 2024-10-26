function minBitFlips(start: number, goal: number): number {
    let result = start ^ goal;
    let count = 0;
    while(result != 0){
       count += result &1;
       result = result >> 1;
    }
    return count;
};