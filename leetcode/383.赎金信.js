/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let resSet = new Array(26).fill(0);
    let base = "a".charCodeAt();
    for (m of magazine){
        resSet[m.charCodeAt() - base]++;
    }
    for (r of ransomNote){
        if(!resSet[r.charCodeAt() - base])return false;
        resSet[r.charCodeAt() - base]--;
    }
    return true;
};

var ransomNote = "aa";
var magazine = "aabb";
var res = canConstruct(ransomNote, magazine)
console.log(res)