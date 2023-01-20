// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/description/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const mp = new Map();
    let set = new Set()
    let st = s.split(" ");
    if (st.length !== pattern.length) return false;
    for (let i in st) {
        if (!mp.get(pattern[i]) && !set.has(st[i])) {
        mp.set(pattern[i], st[i]);
        set.add(st[i])
        }
    }
    let ans = "";
    for (let i in st) {
        ans += mp.get(pattern[i]);
    }
    st = st.join("");
    return ans === st;
};


// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    let arr = []
    let ans = []
    for(let i of nums) {
        if(map[i] != undefined) {
            map[i]++
        } else {
            map[i] = 1
        }
    }
    for (let key in map) {
        arr.push([key, map[key]])
    }
    arr = arr.sort((a, b) => b[1]-a[1])
    for (let j = 0; j < k; j++) {
        ans.push(parseInt(arr[j][0]))
    }
    return ans
};


// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let ans  = s.replace(/[^a-z|^0-9]/gi, "").toLowerCase();
    let st = 0;
    let en = ans.length-1;
    while (st <= en) {
        if (ans[st] != ans[en]) return false;
        st++;
        en--;
    }
    return true;
};