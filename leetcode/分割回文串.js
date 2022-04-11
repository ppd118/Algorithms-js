var partition = function (s) {
    var res = []
    var path = []
    dfs(0)
    return res

    function dfs(startIndex) {
        if (startIndex >= s.length) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < s.length; i++) {
            //判断子串 startIndex-i是否是回文串，是则加入，否则continue
            if (isPalindrome(s, startIndex, i)) {
                path.push(s.substr(startIndex, i - startIndex + 1))
            } else {
                continue
            }
            //回溯
            dfs(i + 1)
            //撤销操作
            path.pop()
        }
    }

    //双指针判断是否是回文串
    function isPalindrome(str, start, end) {
        let l = start, r = end
        while (l < r) {
            if (str[l] !== str[r]) {
                return false
            }
            l++
            r--
        }
        return true
    }
};

var s = "aab"
let res = partition(s)
console.log(res)