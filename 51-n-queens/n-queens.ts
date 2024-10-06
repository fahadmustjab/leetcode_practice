function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const board: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    const backtrack = (row: number,) => {
        if (row === n) {
            const solution: string[] = [];
            for (let r = 0; r < n; r++) {
                solution.push(board[r].map(cell => (cell === 1 ? 'Q' : '.')).join(''));
            }
            result.push(solution);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col, board, n)) {
                board[row][col] = 1;
                backtrack(row + 1);
                board[row][col] = 0;
            }
        }
    }
    backtrack(0);

    return result;

};

function isSafe(x: number, y: number, board: number[][], n: number): boolean {
    // Check column
    for (let i = 0; i < x; i++) {
        if (board[i][y] === 1) return false;
    }

    // Check left diagonal
    for (let i = 0; i < x; i++) {
        const j = y - (x - i);
        if (j >= 0 && board[i][j] === 1) return false;
    }

    // Check right diagonal
    for (let i = 0; i < x; i++) {
        const j = y + (x - i);
        if (j < n && board[i][j] === 1) return false;
    }

    return true;
}

