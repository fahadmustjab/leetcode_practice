class StockSpanner {
    temp;
    stack;
    constructor() {
        this.temp = [];
        this.stack = [];
    }

    next(price: number): number {
        this.temp.push(price);
        while (this.stack.length > 0 && this.temp[this.stack[this.stack.length - 1]] <= price) {
            this.stack.pop();
        }
        const span = this.stack.length === 0 ? this.temp.length : this.temp.length - this.stack[this.stack.length - 1] - 1;
        this.stack.push(this.temp.length-1);
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */