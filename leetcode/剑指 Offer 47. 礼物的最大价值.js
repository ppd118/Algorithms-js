/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    let dp = Array.from(new Array(grid.length), item => new Array(grid[0].length).fill(0))
    dp[0][0] = grid[0][0]
    console.log(dp[0][0])
    dp[1][0] = dp[0][0] + grid[1][0]
    for (let j = 1; j < grid[0].length; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    }

    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = Math.max(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])
        }
    }
    return dp[grid.length - 1][grid[0].length - 1]

};

var grid = [[1, 2, 5],
[3, 2, 1]]
let res = maxValue(grid)
console.log(res)