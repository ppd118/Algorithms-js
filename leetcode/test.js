// function testweightbagproblem(wight, value, size) {
//     const len = wight.length,
//         dp = array.from({ length: len + 1 }).map(
//             () => array(size + 1).fill(0)
//         );

//     for (let i = 1; i <= len; i++) {
//         for (let j = 0; j <= size; j++) {
//             if (wight[i - 1] <= j) {
//                 dp[i][j] = math.max(
//                     dp[i - 1][j],
//                     value[i - 1] + dp[i - 1][j - wight[i - 1]]
//                 )
//             } else {
//                 dp[i][j] = dp[i - 1][j];
//             }
//         }
//     }

//     //   console.table(dp);

//     return dp[len][size];
// }

// var dfs = (c_num, f_num, custom_list) => {
//     if(Index > )
//     let res = 0

//     for (let i = 0; i < c_num; i++) {
//         if (f[custom_list[i][0]] === 1 && f[custom_list[i][1]] === 1) {
//             res++
//             f[custom_list[i][0]] = 0
//             f[custom_list[i][1]] = 0
//             dfs(,++count)
//         }

//     }
//     return res
// }

var move = (n, m, list) => {
    let cur = 1
    let res = 0
    for (let i = 0; i < list.length; i++) {
        if (cur === list[i]) {
            res++
            cur = far_emerge(n, i, list)
        }
    }
    if (cur === list[list.length - 1]) res++
    return res
}

var far_emerge = (n, startIndex, list) => {
    let emerge = new Array(n + 1).fill(0)
    let j = 1
    emerge[0] = -1
    emerge[list[startIndex]] = j
    for (let i = startIndex; i < list.length; i++) {
        //房间都出现过了
        if (emerge.indexOf(0) === -1) break
        //未出现过记录出现顺序
        if (emerge[list[i]] === 0) {
            emerge[list[i]] = ++j
        }
    }
    return emerge.indexOf(0) === -1 ? emerge.indexOf(Math.max(...emerge)) : emerge.indexOf(0)
}

var list = [2, 1, 1, 2]
let n = 2, m = 4
let res = move(n, m, list)
console.log(res)