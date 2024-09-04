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
    const addTowNumbersUtil = (l1: ListNode | null, l2: ListNode | null, carry: number) => {
        if (!l1 && !l2 && !carry) return null;
        const total = (l1?.val ?? 0) + (l2?.val ?? 0) + (carry || 0);
        carry = parseInt(total / 10 + '');
        return new ListNode(total % 10, addTowNumbersUtil(l1?.next, l2?.next, carry));
    }
    return addTowNumbersUtil(l1,l2,0);
};
