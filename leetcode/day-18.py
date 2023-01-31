# 20. Valid Parentheses
# https://leetcode.com/problems/valid-parentheses/description/

class Solution:
    def isValid(self, s: str) -> bool:
        map = {
            ')':'(',
            ']':'[',
            '}':'{'
            }
        stack = []
        for i in s:
            if i in map and stack and map[i] == stack[-1]:
                stack.pop()
            else:
                stack.append(i)
        return not stack

# 535. Encode and Decode TinyURL
# https://leetcode.com/problems/encode-and-decode-tinyurl/description/

class Codec:
    def __init__(self):
        self.eMap = {}
        self.dMap = {}
        self.url = 'http://tinyurl.com/'
    def encode(self, longUrl: str) -> str:
        """Encodes a URL to a shortened URL.
        """
        if longUrl not in self.eMap:
            url = self.url + str(len(self.eMap)+1)
            self.eMap[longUrl] = url
            self.dMap[url] = longUrl
        return self.eMap[longUrl]
        

    def decode(self, shortUrl: str) -> str:
        """Decodes a shortened URL to its original URL.
        """
        return self.dMap[shortUrl]
        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))