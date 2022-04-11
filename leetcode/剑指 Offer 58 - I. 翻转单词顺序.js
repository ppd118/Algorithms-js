/**
 * @param {string} s
 * @return {string}
 */

// //  1.去除首尾多余空格后，先翻转整个句子
// // 2.分别翻转每个单词
// var reverseWords = function (s) {
//     // 去除首尾多余空格
//     s = s.trim()
//     //去除中间多余空格
//     let arr = Array.from(s)
//     let f = 0, l = 0
//     while (f < arr.length) {
//         while (arr[l] != ' ' && l < arr.length) l++
//         f = l
//         while (arr[f] === ' ' && f < arr.length) f++
//         if (f - l > 1) {
//             arr.splice(l + 1, f - l - 1)
//         }
//         l++
//         f = l
//     }
//     //先翻转整个字符串
//     reverse(arr, 0, arr.length - 1)
//     //再翻转每个单词
//     f = 0, l = 0
//     while (f < arr.length) {
//         while (arr[f] != ' ' && f < arr.length) f++
//         reverse(arr, l, f - 1)
//         f = f + 1
//         l = f
//     }
//     return arr.join('')
// };

// var reverse = function (arr, start, end) {
//     while (start < end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]]
//         start++
//         end--
//     }
// }
// var s = "  the    sky is  blue  "
// let res = reverseWords(s)
// console.log(res)

//set判重（大小王除外），max - min >=5则不能构成顺子
var isStraight = function (nums) {
    let set = new Set()
    let max = 0, min = 13
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue
        if (set.has(nums[i])) return false //有重复牌不是顺子
        max = Math.max(max, nums[i])
        min = Math.min(min, nums[i])
        set.add(nums[i])
    }
    if (max - min >= 5) {
        return false
    } else {
        return true
    }

};

var nums = [1, 2, 3, 4, 5]
let res = isStraight(nums)
