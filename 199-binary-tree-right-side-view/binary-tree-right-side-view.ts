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

function rightSideView(root: TreeNode | null): number[] {
    if (root === null) return [];
    const result = [];
    function reversePreOrder(root: TreeNode | null, level: number){
        if(root === null){
            return;
        }
        if(level === result.length)result.push(root.val);
        reversePreOrder(root.right,level+1);
        reversePreOrder(root.left,level+1);
    }
    reversePreOrder(root,0);
    return result;
};
