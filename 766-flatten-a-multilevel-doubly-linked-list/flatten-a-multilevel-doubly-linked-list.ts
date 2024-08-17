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
    while (merged) {
        if (merged.child) {
            let next = merged.next;
            merged.next=merged.child;
            merged.next.prev=merged;
            merged.child=null;
            let p = merged.next;
            while(p.next){
                p=p.next;
            }
            p.next=next;
            if(next){
                next.prev=p;
            }
        }
        merged = merged.next;
    }
    return head;

}