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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry: number = 0, dummy: ListNode = new ListNode(0);
    let current: ListNode | null = dummy;
    const addTwoNumbersUtil = (l1: ListNode | null, l2: ListNode | null, carry: number): void => {
       if(!l1 && !l2 && !carry)return;
        const sumNum: number = (l1?.val ?? 0) + (l2?.val ?? 0) + (carry || 0);
        current.next = new ListNode(sumNum % 10);
        current = current.next;
        carry = Math.floor(sumNum / 10);
        addTwoNumbersUtil(l1?.next, l2?.next, carry);
    }

    addTwoNumbersUtil(l1, l2, 0);

    if (carry) {
        current.next = new ListNode(carry);
    }
    return dummy.next;
};