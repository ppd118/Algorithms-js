/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */



//  回溯终止条件：sum === target,剪枝sum>target sum+candidates[i]>target
var combinationSum2 = function (candidates, target) {
    var res = []
    var path = []

    // 排序
    candidates.sort((a, b) => { return a - b })
    dfs(0, 0)
    return res

    function dfs(sum, startIndex) {
        if (sum > target) return
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (sum + candidates[i] > target) continue
            // 同一树层上的相同数字要去重
            if (i != startIndex && candidates[i] === candidates[i - 1]) {
                continue
            }
            sum += candidates[i]
            path.push(candidates[i])
            dfs(sum, i + 1) //同可以重复选取的组合不同，这里选过后跳到下一个备选数
            sum -= candidates[i]
            path.pop()
        }
    }
};

var can = [10, 1, 2, 7, 6, 1, 5]
var target = 8
var res = combinationSum2(can, target)
console.log(res)