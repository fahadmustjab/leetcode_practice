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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let left: ListNode = head;
    let right: ListNode = head;
    let dummy: ListNode = right;
    for(let i =0;i < n;i++){
        right=right.next;
    }
    if(!right){
        return left.next;
    }
    while(right.next){
        right=right.next;
        left=left.next;
    }
    left.next=left.next.next;
    return dummy;
};