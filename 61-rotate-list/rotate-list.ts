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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next) return head;
    let length = 1;
    let current: ListNode = head;
    while (current.next) {
        current = current.next;
        length++;
    }
    current.next = head;
    k = k % length;
    let stepsTomove = length - k;
    let tail = current;
    while (stepsTomove--) {
        tail = tail.next;
    }
    let newHead = tail.next;
    tail.next = null;
    return newHead;

};