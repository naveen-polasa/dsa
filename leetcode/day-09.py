# 88. Merge Sorted Array
# https://leetcode.com/problems/merge-sorted-array/description/

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        en = m+n-1
        while m > 0 and n > 0:
            if nums1[m-1] < nums2[n-1]:
                nums1[en] = nums2[n-1]
                n-=1
            else:
                nums1[en] = nums1[m-1]
                m-=1
            en-=1
        if n>0:
            nums1[:n] = nums2[:n]


# 283. Move Zeroes
# https://leetcode.com/problems/move-zeroes/description/

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        st = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[st], nums[i] = nums[i], nums[st]
                st+=1
        

# 26. Remove Duplicates from Sorted Array
# https://leetcode.com/problems/remove-duplicates-from-sorted-array/

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        st = 1
        for i in range(1,len(nums)):
            if nums[i-1] != nums[i]:
                nums[st] = nums[i]
                st+=1
        return st