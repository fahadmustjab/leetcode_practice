/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    const reverseList = (node: ListNode | null, prev: ListNode | null): ListNode | null => {
        if(node === null){
            return prev;
        }
        let next: ListNode = node.next;
        node.next = prev;
        prev = node;
        return reverseList(next,prev);
    }
    return reverseList(head,null);
};