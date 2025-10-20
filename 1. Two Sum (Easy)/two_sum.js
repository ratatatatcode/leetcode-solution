/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        let difference = target - nums[i];
        if (map.has(difference)) return [map.get(difference), i]
        else map.set(nums[i], i);
    }
};