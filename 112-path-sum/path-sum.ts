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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    let sum = 0;
    function height(root: TreeNode | null, sum: number) {
        if (root === null) return false;
        sum += root.val;
        if (root.left === null && root.right === null) {
            return sum === targetSum;
        }
        return height(root.left,sum) || height(root.right,sum);
    }
    return height(root, sum);
};


