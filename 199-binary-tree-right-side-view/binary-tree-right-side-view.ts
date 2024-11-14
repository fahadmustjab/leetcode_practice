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
    const result: number[] = [];
    if(!root)return result;
    const queue = new Queue();
    queue.push(root);
    while(!queue.isEmpty()){
        const size =  queue.size();
        let array = [];
        for(let i =0;i < size;i++){
            const node = queue.front();
            queue.dequeue();
            array.push(node.val);
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
        result.push(array[size-1]);
    }
    return result;
};