function isPowerOfThree(n: number): boolean {
    if(n === 0)return false;
    if(n === 1)return true;
    if(n % 3 === 0){
        return isPowerOfThree(n/3);
    }else{
        return false;
    }
};