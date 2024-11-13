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

function verticalTraversal(root: TreeNode | null): number[][] {
  if (!root) return [];

  // Map to store nodes by their (x, y) coordinates
  const nodeMap: Map<number, Map<number, number[]>> = new Map();

  // Queue to store nodes along with their x and y coordinates
  const queue: [TreeNode, number, number][] = [[root, 0, 0]];

  // Perform BFS traversal
  while (queue.length > 0) {
    const [node, x, y] = queue.shift()!;

    if (!nodeMap.has(x)) nodeMap.set(x, new Map());
    if (!nodeMap.get(x)!.has(y)) nodeMap.get(x)!.set(y, []);

    nodeMap.get(x)!.get(y)!.push(node.val);

    if (node.left) queue.push([node.left, x - 1, y + 1]);
    if (node.right) queue.push([node.right, x + 1, y + 1]);
  }

  const result: number[][] = [];

  const sortedColumns = Array.from(nodeMap.keys()).sort((a, b) => a - b);

  for (const x of sortedColumns) {
    const column: number[] = [];
    const sortedRows = Array.from(nodeMap.get(x)!.keys()).sort((a, b) => a - b);

    for (const y of sortedRows) {
      // Sort nodes at each (x, y) position and add to column
      const nodes = nodeMap.get(x)!.get(y)!;
      nodes.sort((a, b) => a - b);
      column.push(...nodes);
    }

    // Add sorted column to result
    result.push(column);
  }

  return result;
}