# 167. Two Sum II - Input Array Is Sorted
# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers)-1
        while l <= r:
            sum = numbers[l] + numbers[r]
            if sum > target:
                r-=1
            elif sum < target:
                l+=1
            else:
                return [l+1, r+1]


# 15. 3Sum
# https://leetcode.com/problems/3sum/description/

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        for i, a in enumerate(nums):
            if i>0 and a==nums[i-1]:
                continue

            l, r = i+1, len(nums)-1
            while l<r:
                sum = a + nums[l] + nums[r]
                if sum > 0:
                    r-=1
                elif sum < 0:
                    l+=1
                else:
                    res.append([a,nums[l],nums[r]])
                    l+=1
                    while nums[l] == nums[l-1] and l<r:
                        l+=1

        return res

# 189. Rotate Array
# https://leetcode.com/problems/rotate-array/description/

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        
        l=0
        r = len(nums)-1
        k = (k)%(r+1)
        self.swap(nums,l,r-k)
        self.swap(nums,r-k+1,r)
        self.swap(nums,l,r)

    def swap(self,nums,i,j):
        while i<j:
            [nums[i],nums[j]] = [nums[j],nums[i]]
            i+=1
            j-=1
    