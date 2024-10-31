function maxScore(cardPoints: number[], k: number): number {
    const n = cardPoints.length;
    let l = 0, r = n - 1, sum = 0, maxSum = 0;
    while (l < k) {
        sum += cardPoints[l];
        l++;
    }
    maxSum = Math.max(maxSum, sum);
    while (r >= n - k) {
        l--;
        sum -= cardPoints[l];
        sum += cardPoints[r];
        maxSum = Math.max(maxSum, sum);
        r--;
    }
    return maxSum;
};