/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     prev: _Node | null
 *     next: _Node | null
 *     child: _Node | null
 *     
 *     constructor(val?: number, prev? : _Node, next? : _Node, child? : _Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */


function flatten(head: _Node | null): _Node | null {
    let merged = head;
    let dummy = merged;
    while (merged) {
        let child = merged.child;
        let next = merged.next;
        if (child) {
            merged.next = child;
            child.prev = merged;
            merged.child = null;
            while (child.next) {
                child = child.next;
            }

            if (next) {
                child.next = next;
                next.prev = child;
            }
        }

        merged = merged.next;
    }
    return dummy;

}