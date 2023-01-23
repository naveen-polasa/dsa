# 704. Binary Search
# https://leetcode.com/problems/binary-search/description/

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        st = 0
        en = len(nums) - 1
        while st <= en:
            mid = (st + en) // 2
            if nums[mid] < target:
                st = mid + 1
            elif nums[mid] > target:
                en = mid - 1
            else:
                return mid
        return -1

# 35. Search Insert Position
# https://leetcode.com/problems/search-insert-position/description/

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1
        while l <= r:
            mid = (l+r)//2
            if nums[mid] < target:
                l = mid + 1
            elif nums[mid] > target:
                r = mid - 1
            else:
                return mid
        return l

# 374. Guess Number Higher or Lower
# https://leetcode.com/problems/guess-number-higher-or-lower/description/

# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        l, r = 1, n
        while l <= r:
            mid = (l+r)//2
            n = guess(mid)
            if n == -1:
                r = mid - 1
            elif n == 1:
                l = mid + 1
            elif n == 0:
                return mid
            
