/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //双指针法
    let s = x.toString().split("")
    console.log(s)
    let right = 0, left = s.length - 1
    while (right < left) {
        if (s[right] != s[left]) return false
        right++
        left--
    }
    return true
};

var x = '121'
console.log(isPalindrome(x))
