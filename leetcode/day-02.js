// Is Subsequence
// https://leetcode.com/problems/is-subsequence/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let st = 0
    for(let i=0; i<t.length; i++) {
        if(s[st] === t[i]) {
            st++
        }
    }
    return st === s.length
};


// Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = 0
    let prev = 0
    for(let j in s) {
        if(s[j] !== " ") {
            i++
            prev = i
        } else {
            i = 0
        }
    }
    return Math.max(prev, i) 
};


// Two Sum
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i]+nums[j] == target) {
                return [i,j]
            }
        }
    }
    return [-1,-1]
};

// using hashmap

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i] 
    if(mp[diff] !== undefined) {
        return [mp[diff], i]
    }
    mp[nums[i]] = i
  }
};  