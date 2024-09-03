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
    let dummy: ListNode | null = new ListNode(0);
    let current: ListNode | null = dummy;
    const traverse = (node: ListNode): void => {
        if(node === null){
            return ;
        }
        traverse(node.next);
        current.next = new ListNode(node.val);
        current = current.next;
    }
    traverse(head);
    return dummy.next;
};