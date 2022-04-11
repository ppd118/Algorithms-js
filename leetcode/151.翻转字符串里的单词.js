/**
 * @param {string} s
 * @return {string}
 */

function removeExtraSpaces(s) {
    let fast = 0, slow = 0;
    // 删除字符串前和中间多余的空格
    while (fast < s.length) {
        if (s[fast] === ' ' && (fast === 0 || s[fast - 1] === ' ')) {
            fast++;
        } else {
            s[slow++] = s[fast++]
        }
    }
    // 删除末尾多余空格
    s.length = s[slow - 1] === ' ' ? slow - 1 : slow;
}

function reverse(s, start, end) {
    let l = start, r = end;
    while (++l < --r) [s[l], s[r]] = [s[r], s[l]]
}

var reverseWords = function (s) {
    const strArr = Array.from(s);
    // 移除多余空格
    removeExtraSpaces(strArr)
    // 翻转整个字符串
    reverse(strArr, -1, strArr.length)

    // 翻转每个单词
    let start = -1, end = 0;
    while (end < strArr.length) {
        while (strArr[end] != ' ' && end < strArr.length) end++;
        reverse(strArr, start, end)
        start = end
        end++
    }
    return strArr.join('')
};

var s = " the   sky is  blue  "
var res = reverseWords(s)
console.log(res)