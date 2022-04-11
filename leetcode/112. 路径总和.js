
//  Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


// 迭代法
var hasPathSum = function (root, targetSum) {
    if (root === null) return false
    let stack = [[root, root.val]]
    while (stack.length) {
        let cur = stack.pop()
        if (!cur[0].left && !cur[0].right && cur[1] === targetSum) return true
        if (!cur[0].left && !cur[0].right) return false

        if (cur[0].right) {
            stack.push([cur[0].right, cur[0].right.val + cur[1]])
        }
        if (cur[0].left) {
            stack.push([cur[0].left, cur[0].left.val + cur[1]])
        }
    }
    return false
};