class MinStack {
    private min: number = Number.MAX_SAFE_INTEGER;
    private stack;
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push(val);
            this.min = val;
        } else {
            if (val < this.min) {
                this.stack.push(2 * val - this.min);
                this.min = val;
            } else {
                this.stack.push(val);
            }
        }
    }

    pop(): void {
        const x = this.stack[this.stack.length - 1];
        this.stack.pop();
        if (x < this.min) {
            this.min = 2 * this.min - x;
        }
    }

    top(): number {
        let x = this.stack[this.stack.length - 1];
        if (x < this.min) {
            return this.min;
        } else {
            return x;

        }
    }

    getMin(): number {
        return this.min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */