var swapPairs = function(head){
    //创造虚拟头结点
    let ret = new ListNode(0,head),temp = ret;
    while(temp.next&&temp.next.next){
        //双指针
        let cur = temp.next.next;//2  
        let pre = temp.next;//1  
        pre.next = cur.next;//1->3  
        cur.next = pre;//2->1 
        temp.next = cur;//0->2 
        temp = pre;//1 
        // 2 1 3 4
    }
    return ret.next;
};
head = [1,2,3,4];
swapPairs(head);