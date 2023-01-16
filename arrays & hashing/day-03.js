// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/description/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = strs[0]

    for (let i = 1; i < strs.length; i++) {
        for (let j = ans.length-1; j>=0; j--) {
            if(ans[j] !== strs[i][j]) {
                ans = ans.slice(0,j)
            }
        }
    }
    return ans
};

// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        let mp = {};
        let ans = []
    for (let ar of strs) {
        let arr = new Array(26).fill(0);
        for (let i = 0; i < ar.length; i++) {
        arr[ar.charCodeAt(i)-'a'.charCodeAt()]++
        }
        arr = arr.map(item => `#${item}`).join('')
        if(mp[arr]) {
            mp[arr] = [...mp[arr],ar]
        } else{
            mp[arr] = [ar]
        }
    }
    for (let s in mp) {
        ans.push(mp[s])
    }
    return [...ans]
};

// 118. Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = [1];
  let ans = [];
  ans.push(arr);
  for (let i = 1; i < numRows; i++) {
    let lastAr = ans[ans.length-1]
    let tempArr = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        tempArr.push(1);
      } else {
        tempArr.push(lastAr[j-1]+lastAr[j]);
      }
    }
    ans.push(tempArr);
  }
  return ans;
};