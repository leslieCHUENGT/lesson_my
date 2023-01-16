var reverseList = function(head){
    //先判断头结点与其next的指向
    if(!head||!head.next)return head;
    //temp暂时存储现指向的，现指向的next需要被赋值前一个节点pre，pre成为现节点的指向，cur成为下一个节点的指向
    let temp = null,pre = null,cur = head;
    while(cur){
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}




