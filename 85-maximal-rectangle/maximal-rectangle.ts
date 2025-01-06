function maximalRectangle(matrix: string[][]): number {
    const m = matrix.length, n = matrix[0].length;
    let prefixSum = Array.from({ length: m }, () => Array(n).fill(0)), max = 0;
    for (let i = 0; i < m; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                prefixSum[i][j] = (i === 0) ? 1 : prefixSum[i - 1][j] + 1;
            } else {
                prefixSum[i][j] = 0;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        max = Math.max(max, largestRectangleArea(prefixSum[i]));
    }
    return max;
};


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
        let pse = stack.length > 0 ? stack[stack.length - 1] : -1;
        maxArea = Math.max(maxArea, heights[element] * (nse - pse - 1));
    }
    return maxArea
};

