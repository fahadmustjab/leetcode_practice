function maxArea(height: number[]): number {
    let max = 0, a = 0, n = height.length - 1;
    while (a < n) {
        const minHeight = height[a] < height[n] ? height[a++] : height[n--];
        max = Math.max(max, minHeight * (n - a + 1));
    }
    return max;
}
