function reverseBits(n: number): number {
    let result = 0; // This will hold the reversed bits.
    
    for (let i = 0; i < 32; i++) {
        // Get the least significant bit of n
        const bit = (n >> i) & 1;
        // Shift the result left to make space for the new bit
        result = (result << 1) | bit;
    }
    
    return result >>> 0; // Ensure the result is treated as an unsigned integer
}
