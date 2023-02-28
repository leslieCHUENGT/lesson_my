var levelOrder = function (root) {
    let res = [], queue = [];
    if (root === null) return res;
    queue.push(root);
    while (queue.length !== 0) {
        //记录当前层数的节点数，后续需要把节点展开
        let length = queue.length;
        let curLevel = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        res.push(curLevel);
    }
    return res;
};