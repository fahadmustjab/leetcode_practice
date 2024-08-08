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
    if (head === null || head.next === null) return true;
    let middle = findMiddle(head);
    let temp = middle
    let reversed = reverse(temp);
    return isEqual(head, reversed);
};

function isEqual(head1: ListNode, head2: ListNode) {
    while (head1 && head2) {
        if (head1.val !== head2.val) {
            return false;
        }
        head1 = head1.next;
        head2 = head2.next;
    }
    return true;
}


function findMiddle(head) {
    let slow: ListNode = head;
    let fast: ListNode = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverse(head: ListNode): ListNode | null {
    let prev: ListNode | null = null;
    let next: ListNode | null = null;
    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}