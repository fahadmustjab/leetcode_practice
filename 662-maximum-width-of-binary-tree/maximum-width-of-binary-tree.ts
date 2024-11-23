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

function widthOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;
    let ans = 0;
    let queue = new Queue();
    queue.push([root, 0]);
    const ds = [];
    while (!queue.isEmpty()) {
        const size = queue.size();
        let first, last;
        const [_, min] = queue.front();
        for (let i = 0; i < size; i++) {
            let [node, cur_id] = queue.front();
            cur_id = cur_id - min;
            queue.dequeue();
            if (i === 0) first = cur_id;
            if (i === size - 1) last = cur_id;
            if (node.left) {
                queue.push([node.left, 2 * cur_id + 1]);
            }
            if (node.right) {
                queue.push([node.right, 2 * cur_id + 2]);
            }
        }
        ans = Math.max(ans, last - first + 1);
    }
    return ans;

};
