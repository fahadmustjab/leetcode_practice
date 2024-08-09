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
    if(!l1)return l2;
    if(!l2)return l1;
    let dummy: ListNode = new ListNode(0);
    let sum: ListNode = dummy;
    let carry = 0
    while(l1 || l2){
        let sumNum = (l1?.val || 0) + (l2?.val || 0)+ carry;
        carry = Math.floor(sumNum /10);
        sum.next=new ListNode(sumNum%10);
        if(l1)l1=l1.next;
        if(l2)l2=l2.next;
        sum=sum.next;
    }
    if(carry){
        sum.next=new ListNode(carry);
    }
    return dummy.next;
};