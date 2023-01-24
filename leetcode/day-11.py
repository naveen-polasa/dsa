# 682. Baseball Game
# https://leetcode.com/problems/baseball-game/description/

class Solution:
    def calPoints(self, operations: List[str]) -> int:
        res = []
        for i in operations:
            if i == '+':
                res.append(res[-2] + res[-1])
            elif i == 'D':
                res.append(res[-1] * 2)
            elif i == 'C':
                res.pop()
            else:
                res.append(int(i))
             
        return sum(res)

# 225. Implement Stack using Queues
# https://leetcode.com/problems/implement-stack-using-queues/

class MyStack:

    def __init__(self):
        self.stack = deque()

    def push(self, x: int) -> None:
        self.stack.append(x)

    def pop(self) -> int:
        for i in range(len(self.stack) - 1):
            self.push(self.stack.popleft())
        return self.stack.popleft()

    def top(self) -> int:
        return self.stack[-1]

    def empty(self) -> bool:
        return not len(self.stack)


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()


# 121. Best Time to Buy and Sell Stock
# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        st = 0
        en = 1
        maxP = 0
        while en <= len(prices) - 1:
            if prices[st] < prices[en]:
                profit = (prices[en] - prices[st])
                maxP = max(maxP, profit)
            else:
                st = en
            en+=1
        
        return maxP