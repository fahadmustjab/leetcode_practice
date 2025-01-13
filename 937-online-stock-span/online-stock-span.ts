class StockSpanner {
    temp;
    constructor() {
        this.temp = [];
    }

    next(price: number): number {
        let count = 1;
        this.temp.push(price);
        for(let i=this.temp.length-2;i>=0;i--){
            if(this.temp[i] <= price){
                count++;
            }else{
                break;
            }
        }
        return count;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */