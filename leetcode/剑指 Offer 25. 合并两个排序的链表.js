// /   Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}



function creatLinkLst(array) {
    let head = new ListNode()
    let cur = head
    for (let i = 0; i < array.length; i++) {
        let node = new ListNode(array[i])
        cur.next = node;
        cur = cur.next;
    }
    return head.next
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//  双指针遍历l1与l2，若l1.val>=l2.val
var mergeTwoLists = function (l1, l2) {
    //以l1为合并的链表作为返回链表
    if (l1.val > l2.val) {
        [l1, l2] = [l2, l1]
    }
    let pre = null, cur1 = l1, cur2 = l2
    while (cur1 && cur2) {
        if (cur1.val > cur2.val) {
            let temp = cur2.next
            // 插入cur2
            pre.next = cur2
            cur2.next = cur1

            pre = pre.next
            cur2 = temp
        } else {
            pre = cur1
            cur1 = cur1.next
        }
    }
    if (!cur1 && cur2) {
        pre.next = cur2
    }
    return l1
};

var l1 = creatLinkLst([1, 2, 4])
var l2 = creatLinkLst([1, 3, 4])
var mergeList = mergeTwoLists(l1, l2)
