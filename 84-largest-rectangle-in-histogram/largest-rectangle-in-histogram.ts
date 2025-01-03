function largestRectangleArea(heights: number[]): number {
    const n = heights.length;
    let stack = [], maxArea = 0;
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            let element = stack[stack.length - 1];
            stack.pop();
            let nse = i;
            let pse = stack.length > 0 ? stack[stack.length - 1] : -1;
            maxArea = Math.max(maxArea, heights[element] * (nse - pse - 1));
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        let nse = n;
        let element = stack[stack.length - 1];
        stack.pop();
        let pse = stack.length > 0 ? stack[stack.length-1] : -1;
        maxArea = Math.max(maxArea,heights[element]* (nse - pse - 1));
    }
    return maxArea
};

