/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//1.寻找一个区间l <= t <=r,若不存在则直接返回false
//2.区间内使用二分查找
var binaryFind = function (array, target) {
    let l = 0, r = array.length - 1
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2)
        if (array[mid] === target) return true
        if (array[mid] < target) {
            l = mid + 1
        } else {
            r = mid
        }
    }
    return array[r] === target ? true : false
}
var findNumberIn2DArray = function (matrix, target) {
    //寻找区间
    let i, n = matrix.length, m = matrix[0].length
    for (i = 0; i < n; i++) {
        if (matrix[i][0] <= target && matrix[i][m - 1] >= target) {
            if (binaryFind(matrix[i], target)) return true
        }
    }
    return false
};

var m = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
var t = 6
let res = findNumberIn2DArray(m, t)
console.log(res)