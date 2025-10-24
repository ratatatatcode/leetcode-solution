/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const total = m + n;
    const merged = [...nums1, ...nums2].sort((a, b) => a -b);
    const mid = Math.ceil(total/2) - 1;
    
    if (total % 2 == 0) return (merged[mid] + merged[mid + 1]) / 2;
    return merged[mid];
};

/*
    I passed the LeetCode problem with this solution, but it doesn’t comply with the topic tags
    (Array, Binary Search, Divide and Conquer) or the time complexity constraint of O(log(m + n)).
*/