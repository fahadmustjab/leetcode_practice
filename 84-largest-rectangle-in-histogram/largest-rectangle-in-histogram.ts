function largestRectangleArea(heights: number[]): number {
    const n = heights.length;
    const pse = previousSmallerElement(heights, n);
    const nse = nextSmallerElement(heights, n);
    let maxArea = 0;

    for (let i = 0; i < n; i++) {
        let area = heights[i] * (nse[i] - pse[i] - 1)
        maxArea = Math.max(maxArea, area);
    }
    return maxArea
};

function previousSmallerElement(heights: number[], n: number) {
    let stack = [], pse = Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length) {
            pse[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return pse;
}



function nextSmallerElement(heights: number[], n: number) {
    let stack = [], nse = Array(n).fill(n);
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length) {
            nse[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return nse;
}

// [-1,-1,1,5,1,2] pse
// [1,6,2,2,6,6] nse