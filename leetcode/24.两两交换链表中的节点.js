
//   Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 


function creatLinkLst(array){
    let head = new ListNode()
    let cur = head
    for(let i = 0; i < array.length; i++){
        let node = new ListNode(array[i])
        cur.next = node;
        cur = cur.next;
    }
    return head.next
}

function swapPairs(head) {
    if(!head || !head.next)return head;
    let cur = head,
        h = head.next;
    while(cur && cur.next){
        let pre = cur;
        cur = cur.next;
        let next = cur.next;
     
        cur.next = pre;
        pre.next = next ? (next.next ? next.next : next) : null
        cur = next;
    }
    return h;
};


// 19. 删除链表的倒数第 N 个结点
function removeNthFromEnd (head, n) {
    if(!head.next) return null
    let h = new ListNode(0, head)
    let slow = fast = head
    let pre = h
    while(n){
        fast = fast.next
        n--
    }

    while(fast){
        pre = slow
        slow = slow.next
        fast = fast.next
    }

    pre.next = slow.next

    return h.next
};


var getListLength = function(head){
    let cur = head, len = 0;
    while(cur){
        len++
        cur = cur.next
    }
    return len
}

var getIntersectionNode = function(headA, headB) {
    // 2个指针分别指向两个链表，先让指针移动到对齐位置（长的链表指针移动到|len_b- len_a|的位置），然后依次比较是否相等，相等或遍历到链表末尾则退出循环
     let len_a = getListLength(headA)
         len_b = getListLength(headB)
         curA = headA, curB = headB
     if(len_a < len_b){
         [len_a, len_b] = [len_b, len_a]
         [curA, curB] = [curB, curA]
     }
     let n = len_a - len_b
     while(n-- > 0){
         curA = curA.next
     }
     while(curA && curA.val !== curB.val){
         curA = curA.next
         curB = curB.next
     }
     return curA ? curA.next : null
 };

var num1 = [5,0,1,8,4,5]
var num2 = [4,1,8,4,5]
var headA = creatLinkLst(num1)
var headB = creatLinkLst(num2)
var res = getIntersectionNode(headA, headB)
var a  = 1