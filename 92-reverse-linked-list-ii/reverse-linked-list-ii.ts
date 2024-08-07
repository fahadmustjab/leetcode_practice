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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head || left === right) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev: ListNode | null = dummy;
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }
    let start = prev.next;
    let reversed: ListNode = reverseList(start, left, right);
    prev.next = reversed;
    return dummy.next;

};

function reverseList(head: ListNode | null, left: number, right: number): ListNode | null {
    let next: ListNode | null = null;
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    for (let i = left; i <=right; i++) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head.next = curr;
    return prev;
};