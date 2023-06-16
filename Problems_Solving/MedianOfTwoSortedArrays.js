/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arrays = nums1.concat(nums2)
    let middle = arrays.length / 2;
    let isOdd = arrays.length % 2;
    arrays.sort((a, b) => a - b);
    if (isOdd) {
        return arrays[middle - 0.5];
    }
    return (arrays[middle - 1] + arrays[middle]) / 2;
};