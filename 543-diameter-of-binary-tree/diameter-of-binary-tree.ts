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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (root === null) return 0;
    const left = height(root.left);
    const right = height(root.right);
    const d1 = diameterOfBinaryTree(root.left);
    const d2 = diameterOfBinaryTree(root.right);
    return Math.max(left + right, Math.max(d1, d2));
};

function height(root: TreeNode | null): number {
    if (root === null) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
}