// contains duplicate
// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    const obj = {}
    for(let i=0; i<nums.length; i++) {
       if(obj.hasOwnProperty(nums[i])) {
           return true
       }
       else {
           obj[nums[i]] = 1
       }
    }
    return false
};

// Valid Anagram
// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const ss = {}
    const tt = {}
    for(let i=0; i<s.length; i++) {
        ss[s[i]] = (ss[s[i]] || 0) + 1
        tt[t[i]] = (tt[t[i]] || 0) + 1
    }
    for (let x in ss) {
        if(ss[x] !== tt[x]) {
            return false
        }
    }
    return true
};

// Replace Elements With Greatest Element On Right Side
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
        let max = -1
    for (let i = arr.length - 1; 0 <= i; i--) {
         const num = arr[i];
         arr[i] = max;
         max = Math.max(max, num);
     }

     return arr;
};

