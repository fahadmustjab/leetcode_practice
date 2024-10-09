function climbStairs(n: number): number {
    function memo(n,arr){
        if(n <=1)return 1;
        if(arr[n] != -1)return arr[n];
        arr[n] = memo(n-1,arr)+memo(n-2,arr);
        return arr[n];
    }
    let arr = Array(n+1).fill(-1);
    return memo(n,arr);
     
};