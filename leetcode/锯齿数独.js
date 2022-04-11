var suduko = function (arr) {
    let count = Array(6).fill(0)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[i][j] != '*') {
                count[i] += 1
                count[3 + j] += 1
            }
        }
    }
    let gong = Array(3)
    let start = Math.max(...count)
    if (start < 3) {

    } else {
        start = start - 3
    }

}

var arr = [['*', 2, '*'],
[1, '*', 2],
['*', '*', '*']]