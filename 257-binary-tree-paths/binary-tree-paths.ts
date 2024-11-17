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

function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = [];
    if (!root) return result;
    function printPaths(root: TreeNode | null, arr: number[]) {
        if (root === null) return;
        arr.push(root.val);
        if (!root?.left && !root?.right) {
            const path = arr.join('->');
            result.push(path);
        } else {
            printPaths(root.left, arr);
            printPaths(root.right, arr);
        }
        arr.pop();
    }
    printPaths(root, []);
    return result;
};


