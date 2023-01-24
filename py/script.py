# def add_nums(n1,n2):
#     sum = n1+n2
#     return sum


# a = add_nums(32,42)
# print(a)

# print("num")

# x=y=z = 'naveen'
# print(y)

# x='nave'
# y='en'
# z='polasa'

# print(x+y+z)

# a = str(31)
# print(type(a))

# def add(n1,n2):
#     sum =n1+n2
#     return sum

# print(add(132,532))

# import random

# print(random.randrange(1,21))

# a ='naveen polasa me'

# for x in a:
#     print(x)

# print(len(a))

# print('me' in a)

# print('yes' not in a)

# print(a[2:6])

# print(a.upper())

# print(a.lower())

# print(a.strip()) # removes spaces at start or end

# print(a.replace('me', 'you'))

# print(a.split(' '))

# a='naveen'
# b='polasa'

# print(a+ ' ' +b)

# a=9123
# b='naveen{}'

# print(b.format(a))

# a="naveen\"1213\"polasa"
# print(a)

# a=32
# b=3123
# if a>b:
#     print("yes")
# else:
#     print("no")

# print(bool('af'))

# print(231//231)
# print(2**2)
# list =['32','121','131','2983',23,1313]
# print(list)
# print(len(list))

# print(list[3])

# list.insert(2,'11')
# print(list)

# list.sort()
# print(list)
# list.append(32)
# print(list)

# for a in list:
#     print(a)

# tupple = (23,313,"42",32,'232')
# print(tupple)

# sett = {12,24,3,13,12,2141}
# print(sett)

# def func(n1,n4,n2):
#     return n1+n2+n4

# print(func(n2=23,n4=42,n1=122))

# a = lambda b : b * 2
# print(a(2))

# a=0
# while a < 9:
#     print(a)
#     a+=1

# print('23\nnaveen')

# name = int(input('enter name: '))
# name = name+1
# print('hello', name)

# import math

# pi = -3.14
# print(round(pi))
# print(math.ceil(pi))
# print(math.floor(pi))
# print(abs(pi))
# print(pow(pi,2))
# print(math.sqrt(429))

# x = 21
# y = 4242
# z = 23

# print(max(x,y,z))
# print(min(x,y,z))

# a='blockchain'
# print(a[0:5:2])

# lice = slice(2,6)
# print(a[lice])

# a = int(input('how old are you? : '))

# if a < 12:
#     print('kid')
# elif a >= 12 and a < 18:
#     print('kid++')
# else :
#     print('adult')

# row = int(input('enter rows: '))
# col = int(input('enter columns: '))
# symbol = input('enter symbol: ')

# for i in range(row):
#     for j in range(col):
#         print(symbol, end="")
#     print()

# drinks = ["coffee", "soda", "tea"]
# dinner = ["pizza", "hamburger", "hotdog"]
# dessert= ["cake", "ice cream "]
# food = [drinks, dinner, dessert]

# for i in food:
#     for j in i:
#         print(j, end=" ")
#     print()

# sett = {'hello','there','how', 'are', 'you'}

# sett.add('hsl')
# sett.remove('hsl')

# for x in sett:
#     print(x)

# caps = {'usa': 'washington','india':'delhi','china':'beijing','russia': 'moscow'}

# caps.update({'name':'naveen'})
# caps.update({'usa':'dc'})
# caps.pop('china')
# caps.clear()
# print(caps['india'])
# print(caps.get('germany'))
# print(caps.keys())
# print(caps.values())
# print(caps.items())

# for key, value in caps.items():
#     print(key,value)

#functions

# def hello(name):
#     print('hello', name)

# hello('Naveen')

# import random
# x = random.randint(1,5)
# print(x)

# class Car:

#     def __init__(self,make,model,year,color):
#         self.make = make
#         self.model = model
#         self.year = year
#         self.color = color


#     def drive(self):
#         print('this car is driving')

#     def stop(self):
#         print('this car is stopped')

    

# car1 = Car('chevy','corvette', 2022, 'black')

# print(car1.color)

# car1.drive()

# class Animal():
    
#     def eat(self):
#         print('eating')
#     def run(self):
#         print('running')

# class Dog(Animal):
    
#     legs = 4

#     def bark(self):
#         print('barking')

# class CustomAnimal(Animal):

#     def __init__(self, legs, color, speed):
#         self.legs = legs
#         self.color = color
#         self.speed = speed

#     def getSpeed(self):
#         print(self.speed)

# d1 = Dog()
# d1.bark()
# d1.eat()
# d1.run()

# c1 = CustomAnimal(4, 'green', 50)

# c1.getSpeed()


# from abc import ABC, abstractmethod

# class Vehicle(ABC):

#     @abstractmethod
#     def go(self):
#         pass

# class Car(Vehicle):
#     pass
#     # def go(self):
#     #     print('drive the car')

# class Bike(Vehicle):

#     def go(self):
#         print('drive the bike')


# car = Car()

# car.go()


# l = [ 32,13,41,52,3,2,3]

# for i, j in enumerate(l):
#     print(i, j)

# l.sort()

# print(l)

# class Node:
#     def __init__(self, val):
#         self.val = val
#         self.next = None


# class LinkedList:
#     def __init__(self):
#         self.head = None
    
#     def insertAtBegining(self, data):
#         node = Node(data)
#         self.head = nodel

#     def print(self):
#         if self.head is None:
#             print('ll is empty')
#             return
        
#         itr = self.head
#         llstr = ''
#         while itr:
#             llstr+=str(itr.val) + "==>"
#             itr = itr.next
#             if itr == None:
#                 llstr = llstr[:-3]


#         print(llstr)

#     def insertAtEnd(self, data):
#         if self.head is None:
#             self.head = Node(data)
#             return
        
#         itr = self.head
#         while itr.next:
#             itr = itr.next
        
#         itr.next = Node(data)


# l1 = LinkedList()
# l1.insertAtBegining(1)
# l1.insertAtEnd(2)
# l1.insertAtEnd(3)
# l1.insertAtEnd(4)
# l1.print()

# class Node:
#     def __init__(self, data = None, next = None):
#         self.data = data
#         self.next = next

# class Linkedlist:
#     def __init__(self):
#         self.head = None
    
#     def insertAtBeginning(self,data):
#         node = Node(data, self.head)
#         self.head = node

#     def print(self):
#         if self.head is None:
#             print("ll is empty")
#             return
        
#         itr = self.head
#         ll = ""
#         while itr:
#             ll+=str(itr.data) + '==>'
#             itr = itr.next
#         print(ll)

# n1 = Linkedlist()
# n1.insertAtBeginning(48)
# n1.insertAtBeginning(48)
# n1.print()

# a = 0
# a = 23
# print(a,'sfa')

# a, b, c = 23, 23, True
# print(a,b,c)

# a+=1
# a = a + 1
# print(a)

# a = None
# print(a)

# a = 1
# if a < 0:
#     print(a)
# elif a == 1:
#     print(a-1)
# else:
#     print(a)

# n,m = 1,3
# if(n<2 and m>2 or n == m):
#     print(n,m)

# n = 1
# while n<5:
#     print(n,end=' ')
#     n+=1

# print()

# for i in range(5):
#     print(i)

# for i in range(2,6):
#     print(i)

# for i in range(5,1,-2):
#     print(i)

# print(5/2)
# print(5//2)
# print(-5//2)
# print(int(-5/2))
# print(-7//2)
# print(20%6)
# print(-20%6)

# import math
# print(math.fmod(-10,3))
# print(math.floor(3/2))
# print(math.ceil(3/2))
# print(math.sqrt(2))
# print(math.pow(3,2))

# float('inf')
# float('-inf')

# arr = [1,32,42,31]
# print(arr)

# arr.append(4)
# arr.append(4453)
# print(arr)

# arr.pop()
# print(arr)
# arr.insert(1,4)
# print(arr)

# arr[0] = 1
# arr[3] = 421
# print(arr)


# arr = [1] * 5
# print(arr)
# print(len(arr))

# print(arr[1:3])

# a,b,c = [1,2,4]
# print(a,b,c)

# arr = [24,4,524,2,31]
# for i in range(len(arr)):
#     print(arr[i])

# for i in arr:
#     print(i)

# for i, n in enumerate(arr):
#     print(i,n)

# arr1 = [12,42,24,52]
# arr2 = [152,34,2,42,52]

# for i, j in zip(arr1,arr2):
#     print(i,j)

# arr1.reverse()
# print(arr1)
# arr2.sort()
# print(arr2)
# arr2.sort(reverse=True)
# print(arr2)

# arr = [i+i for i in range(6)]
# print(arr)

# arr1 = [[0]*4 for i in range(5)]
# print(arr1)

# s = 'naveen'
# print(s)

# strs = ['av','sd','dsf']

# print(' '.join(strs))

# from collections import deque

# queue = deque()
# queue.append(21)
# queue.append(2)
# queue.pop()
# print(queue)
# queue.popleft()
# queue.appendleft(2)
# print(queue)

# set = set()
# set.add(23)
# set.add(2323)
# print(set)
# print(len(set))

# nums = [-4,-1,0,3,10]

# for i in range(len(nums)):
#     nums[i] = nums[i]*nums[i]
# nums.sort()
# print(nums.sort())

# class Solution:
#     def isValid(self, s: str) -> bool:
#         map = {
#             ')':'(',
#             ']':'[',
#             '}':'{'
#             }
#         stack = []
#         for i in s:
#             if i in map and stack and map[i] == stack[-1]:
#                 stack.pop()
#             else:
#                 stack.append(i)
#         return not stack


# s = Solution()
# print(s.isValid(")]()"))


# class Solution:
#     def calPoints(self, operations) -> int:
#         res = []
#         for i in operations:
#             if i == '+':
#                 res.append(res[-2] + res[-1])
#             elif i == 'D':
#                 res.append(res[-1] * 2)
#             elif i == 'C':
#                 res.pop()
#             else:
#                 res.append(int(i))
#         print(res)
#         return res

# s = Solution()
# s.calPoints(["5","2","C","D","+"])

