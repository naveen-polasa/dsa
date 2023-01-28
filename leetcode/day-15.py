# 881. Boats to Save People
# https://leetcode.com/problems/boats-to-save-people/description/

class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        ans = 0
        l, r = 0, len(people)-1
        while l<=r:
            rem = limit - people[r]
            r-=1
            ans+=1
            if l<=r and rem >= people[l]:
                l+=1

        return ans

# 141. Linked List Cycle
# https://leetcode.com/problems/linked-list-cycle/description/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow, fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True

        return False


# 554. Brick Wall
# https://leetcode.com/problems/brick-wall/description/

class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        gapMp = {0:0}

        for row in wall:
            total = 0
            for gap in row[:-1]:
                total += gap
                gapMp[total] = 1 + gapMp.get(total,0)
        
        return len(wall) - max(gapMp.values())