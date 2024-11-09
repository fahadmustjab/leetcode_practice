function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    
    const queue = [root];
    let count = 0;
    
    while (queue.length > 0) {
        let levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        count++;
    }
    
    return count;
}
