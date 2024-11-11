/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    if (root === null) return result;

    const queue = new Queue();
    queue.push(root);
    let flipBit = false;
    while (!queue.isEmpty()) {
        const size = queue.size();
        const array = [];
        for (let i = 0; i < size; i++) {
            const node: TreeNode | null = queue.front()!;
            queue.dequeue();
            if (node === null) continue;

            let index = flipBit ? size - i - 1 : i;
            array[index] = node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        flipBit = !flipBit;
        result.push([...array]);
    }
    return result;
};