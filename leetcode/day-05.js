// 605. Can Place Flowers
// https://leetcode.com/problems/can-place-flowers/description/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let ans = 0
    for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
        flowerbed[i] = 1;
        ans++;
      }
    }
  }
    return ans >= n
};


// 169. Majority Element
// https://leetcode.com/problems/majority-element/

// using hashmaps

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let mp = new Map()
    for(let i=0; i<nums.length; i++) {
        if(mp.has(nums[i])) {
            mp.set(nums[i], mp.get(nums[i])+1)
        }
        else{
            mp.set(nums[i], 1)
        }
    }
    for(let [key,value] of mp) {
        if(value > nums.length / 2) return key;
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0
    let ans = nums[0]
    for(let i of nums) {
        if(count === 0) {
            ans = i
        }
        if(i === ans) {
            count++
        } else {
            count--
        } 
    }
    return ans
};

// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = new Array(nums1.length).fill(-1)
    for(let i=0; i<nums1.length; i++) {
        let id = nums2.indexOf(nums1[i])
        let j = id
        while(j<nums2.length) {
            if(nums2[j+1]>nums2[id]) {
                ans[i] = nums2[j+1]
                break
            } else {
            j++
            }
        }
    }
    return ans
};