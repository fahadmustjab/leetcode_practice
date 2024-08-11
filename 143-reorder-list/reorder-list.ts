function reorderList(head: ListNode | null): void {
    let slow=head,fast=head,prev=null,next,tmp1,tmp2;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    let second = slow.next;
    slow.next=null;
    while(second){
        next=second.next;
        second.next=prev;
        prev=second;
        second=next;
    }
    second=prev;
    let first=head;
    while(second){
        tmp1=first.next;
        tmp2=second.next;
        first.next=second;
        second.next=tmp1
        second=tmp2
        first=tmp1;
    }
};
