/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//  依次遍历合并数组，len/2为偶数 则 [len/2] + [len/2 +1] /2,否则放回[len/2]
var findMedianSortedArrays = function (nums1, nums2) {
    let merge = [],
        i = 0,
        j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merge.push(nums1[i])
            i++
        } else {
            merge.push(nums2[j])
            j++
        }
    }
    if (i < nums1.length) {
        merge = merge.concat(nums1.slice(i, nums1.length))
    }
    if (j < nums2.length) {
        merge = merge.concat(nums2.slice(j, nums2.length))
    }

    let mid = Math.floor(merge.length / 2)
    if (merge.length % 2 === 0) {
        return (merge[mid] + merge[mid - 1]) / 2
    } else {
        return merge[mid]
    }

};

var n1 = [1, 2]
var n2 = [3, 4]
let res = findMedianSortedArrays(n1, n2)