// 27. Remove Element
// https://leetcode.com/problems/remove-element/description/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let st = 0
    for(let i=0; i<nums.length; i++) {
        if(nums[i] != val){
               nums[st] = nums[i]
               st++
        }
    }
    return st
};


// 929. Unique Email Addresses
// https://leetcode.com/problems/unique-email-addresses/

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let st = new Set()
    for(let e of emails) {
        [local,domain] = e.split('@')
        local = local.split('+')[0]
        local = local.replaceAll('.','')
        st.add((local+'@'+domain))
    }
    return st.size
};


// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const smp = new Map()
    const tmp = new Map()
    for(let i in s) {
        if((smp.has(s[i]) && smp.get(s[i]) != t[i]) || (tmp.has(t[i]) && tmp.get(t[i]) != s[i])) {
            return false
        }
        smp.set(s[i],t[i])
        tmp.set(t[i],s[i])
    }
    return true
};