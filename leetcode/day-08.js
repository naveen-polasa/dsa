// 680. Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let st = 0
    let en = s.length - 1
    while(st<=en) {
        if(s[st] != s[en]) {
            let leftSub = s.slice(st+1, en+1)
            let rightSub = s.slice(st, en)
            return (leftSub === leftSub.split('').reverse().join('') 
            || rightSub === rightSub.split('').reverse().join(''))
        }
        st++
        en--
    }
    return true
};

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let st = 0
    let en = s.length - 1
    while(st<=en) {
        if(s[st] != s[en]) {
            let leftSub = s.slice(st+1, en+1)
            let rightSub = s.slice(st, en)
            return (isPalindrome(leftSub) || isPalindrome(rightSub))
        }
        st++
        en--
    }
    return true
};

const isPalindrome = (s) => {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};


// 1984. Minimum Difference Between Highest and Lowest of K Scores
// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let ans = Infinity;
    if (k == 1) return 0;
    nums = nums.sort((a, b) => {
        return a - b;
    });
    let i = 0;
    let j = k-1
    console.log(nums)
    while (j < nums.length) {
        ans = Math.min(Math.abs(nums[i] - nums[j]), ans);
        j++;
        i++;
    }
    return ans;
};


// 344. Reverse String
// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let st = 0
    let en = s.length-1
    while(st<=en) {
        [s[st],s[en]] = [s[en],s[st]]
        st++
        en--
    }
    return s
};