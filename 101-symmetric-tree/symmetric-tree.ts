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

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true;
    return util(root.left, root.right);
};

function util(root1: TreeNode | null, root2: TreeNode | null) {
    if (root1 === null || root2 === null) {
        return root1 === root2;
    }
    if (root1.val != root2.val) return false;
    return util(root1.left, root2.right) && util(root1.right, root2.left);
}