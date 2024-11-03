function totalFruit(fruits: number[]): number {
    const myMap: Map<number, number> = new Map(), n = fruits.length, k = 2;
    let r = 0, max = 0, l = 0;
    while (r < n) {
        myMap.set(fruits[r],(myMap.get(fruits[r]) ?? 0)+1);
        if (myMap.size > k) {
            myMap.set(fruits[l], myMap.get(fruits[l]) - 1);
            if (myMap.get(fruits[l]) == 0) {
                myMap.delete(fruits[l]);
            }
            l++;
        }
        max = Math.max(max, r - l + 1);
        r++;
    }
    return max;
};