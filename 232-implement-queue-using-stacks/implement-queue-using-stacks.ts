class MyQueue {
    private enqueue: number[] = [];
    private dequeue: number[] = [];

    constructor() {
    }

    push(x: number): void {
        this.enqueue.push(x);
    }

    pop(): number {
        this.peek();
        return this.dequeue.pop();
    }

    peek(): number {
        if(this.dequeue.length === 0){
            while(this.enqueue.length !== 0){
                this.dequeue.push(this.enqueue.pop());
            }
        }
        return this.dequeue[this.dequeue.length-1];
    }

    empty(): boolean {
        return this.enqueue.length === 0 && this.dequeue.length === 0; 
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */