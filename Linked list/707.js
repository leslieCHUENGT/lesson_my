class LinkNode{
    constructor(val,next){
        this.val = val;
        this.next = next;
    }
}
var MyLinkedList = function(){
    this._size = 0;
    this._tail = null;
    this._head = null;
}
MyLinkedList.prototype.getNode = function(index){
    if(index<0||index>=this._size) return null;
    // 创建虚拟头节点
    let cur = new LinkNode(0,this._head);
    while(index-- >= 0){
        cur = cur.next;
    }
    return cur;
}
MyLinkedList.prototype.get = function(index){
    if(index<0||index>=this._size) return -1;
    return this.getNode(index).val;
}
MyLinkedList.prototype.addAtHead = function(val){
    const node = new LinkNode(val,this._head);
    this._head = node;
    this._size++;
    if(!this._tail){
        this._tail = node;
    }
}
MyLinkedList.prototype.addAtTail = function(val){
    const node = new LinkNode(val,null);
    this._size++;
    if(this._tail){
        this._tail.next = node;
        this._tail = node;
        return;
    }
    this._tail = node;
    this._head = node;
}
MyLinkedList.prototype.addAtIndex = function(index,val){
    if(index>this._size) return;
    if(index<=0){
        this.addAtHead(val);
        return;
    }
    if(index === this._size){
        this.addAtTail(val);
        return;
    }
    const node = this.getNode(index-1);
    node.next = new LinkNode(val,node.next);
    this._size++;

}
MyLinkedList.prototype.deleteAtIndex = function(index){
    if(index < 0 || index >= this._size) return;
    if(index === 0){
        this._head = this._head.next;
        // 如果删除的这个节点同时是尾节点，要处理尾节点
        if(index === this._size - 1){
            this._tail = this._head
        }
        this._size--;
        return;
    }
    // 获取目标节点的上一个的节点
    const node = this.getNode(index - 1);    
    node.next = node.next.next;
    // 处理尾节点
    if(index === this._size - 1) {
        this._tail = node;
    }
    this._size--;
}







