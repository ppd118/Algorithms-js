
var s = "loveleetcode"
let count = new Array(26).fill(0)
let sArray = Array.from(s)
for (l of sArray) {
    count[l.charCodeAt() - 'a'.charCodeAt()]++
}
for (l of sArray) {
    if (count[l.charCodeAt() - 'a'.charCodeAt()] === 1) console.log(l)
}

console.log(count)
