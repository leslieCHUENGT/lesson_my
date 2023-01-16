/**
 * function ListNode(val,next){
 *  this.val = (val===undefined ? 0 : val)
 *  this.next = (next === undefined ? null : next)
 * }
 */
var removeElements = function(head,val){
    const ret =new ListNode(0,head);//创造了空的头结点
    let cur = ret;
    while(cur.next){
        if(cur.next.val===val){
            cur.next = cur.next.next;
            continue;
        }
        cur=cur.next;
    }
    return ret.next;
}