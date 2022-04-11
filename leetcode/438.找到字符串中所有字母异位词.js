/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var isAnagram = function(s, t) {
    let resSet = new Array(26).fill(0);
    let base = "a".charCodeAt();
    for(const i of s){
        resSet[i.charCodeAt() - base]++;
    }
    for(const i of t){
        if(!resSet[i.charCodeAt() - base])return false;
        resSet[i.charCodeAt() - base]--;
    }
    return true;
};

var findAnagrams = function(s, p) {
    let len = p.length;
    let res = [];
    for(let i = 0;i<s.length;i++){
        let subStr = s.slice(i,len+i)
        if(isAnagram(subStr,p)){
            res.push(i)
        }
    }
    return res;
};

var s = "cbaebabacd";
var p = "abc";
var res = findAnagrams(s, p)
console.log(res)