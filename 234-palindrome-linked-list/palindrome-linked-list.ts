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

function isPalindrome(head: ListNode | null): boolean {
    let current = head;
    const traverse = (node: ListNode | null) => {
        if(node === null){
            return true;
        }
        const prevIsSame = traverse(node.next);
        const currentIsSame = current.val === node.val;
        current=current.next;
        return prevIsSame && currentIsSame;
    }
    return traverse(head);
};

