// 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const sum = nums.reduce((a,b) => a+b)
    leftSum = 0
    for(let i in nums) {
        if(leftSum === sum - nums[i] - leftSum){
            return i
        }
        leftSum+=nums[i]
    }
    return -1
};


// 448. Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let st = new Set()
    let st1 = new Set(nums)
    let ans = []
    for(let i = 1; i<=nums.length; i++) {
        st.add(i)
    }
    for(let j of st) {
        if(!st1.has(j)) {
            ans.push(j)
        }
    }
    return ans
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let ans = []
    for(let i = 0; i<nums.length; i++) {
        if(!nums.includes(i+1)) {
            ans.push(i+1)
        }
    }
    return ans
};


// 1189. Maximum Number of Balloons
// https://leetcode.com/problems/maximum-number-of-balloons/

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const st = new Set(text.split(''));
   
    for (const char of text) {
      if (!st.has(char)) continue;

        const count = ((st[char] ?? 0) + 1)
        st[char] = count;
    }

    let min = Math.min(st['b'], 
                        st['a'], 
                        st['n'], 
                        Math.floor(st['l']/2), 
                        Math.floor(st['o']/2));
    
    return min ? min : 0;
};