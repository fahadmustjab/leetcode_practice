function insert(intervals: number[][], newInterval: number[]): number[][] {
    let i =0;
    let n = intervals.length;
    let result: number[][] = [];
    while(i < n && newInterval[0] > intervals[i][1]){
        result.push(intervals[i]);
        i++;
    }
    //merge 
    while(i < n && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(intervals[i][0],newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1],newInterval[1]);
        i++;
    }
    result.push(newInterval);
    while(i < n){
        result.push(intervals[i]);
        i++;
    }
    return result;
};