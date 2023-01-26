# 36. Valid Sudoku
# https://leetcode.com/problems/valid-sudoku/description/

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        r = defaultdict(set)
        c = defaultdict(set)
        sq = defaultdict(set)

        for i in range(9):
            for j in range(9):
                if board[i][j] == ".":
                    continue
                if (board[i][j] in r[i] or
                    board[i][j] in c[j] or
                    board[i][j] in sq[(i // 3,j // 3)]):
                    return False
                r[i].add(board[i][j])
                c[j].add(board[i][j])
                sq[(i // 3,j // 3)].add(board[i][j])

        return True


# 128. Longest Consecutive Sequence
# https://leetcode.com/problems/longest-consecutive-sequence/description/

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        st = set(nums)
        maxLen = 0
        for i in nums:
            if (i-1) not in st:
                count = 0
                while (i+count) in st:
                    count+=1
                maxLen = max(count, maxLen)
        
        return maxLen


# 75. Sort Colors
# https://leetcode.com/problems/sort-colors/description/

class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        l, r = 0, len(nums) - 1
        i = 0

        while i<=r:
            if nums[i] == 0:
                [nums[i], nums[l]] = [nums[l], nums[i]]
                l+=1
            elif nums[i] == 2:
                [nums[i], nums[r]] = [nums[r], nums[i]]
                r-=1
                i-=1
            i+=1