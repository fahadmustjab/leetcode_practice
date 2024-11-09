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
    let maximum = 0;
    function height(root: TreeNode | null): number {
        if (root === null) return 0;
        const lh = height(root.left);
        const rh = height(root.right);
        maximum = Math.max(maximum, lh + rh);
        return 1 + Math.max(lh, rh);
    }
    height(root);
    return maximum;
};

