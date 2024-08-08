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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy: ListNode = new ListNode(0);
    let merged = dummy;
    if(list1 === null){
        return list2;
    }
    if(list2 === null){
        return list1
    }
    while ((list1 && list2) ) {
        if (list1.val < list2.val) {
            merged.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            merged.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        merged = merged.next;
    }
    if (list1) {
        merged.next = list1;
    }else if(list2){
        merged.next = list2;
    }
    return dummy.next;
};