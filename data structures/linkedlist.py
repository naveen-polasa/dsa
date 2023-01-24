class Node:
    def __init__(self, data=None , next = None):
        self.data = data
        self.next = next
    

class Linkedlist:
    def __init__(self):
        self.head = None
    
    def insertAtBeginning(self, data):
        node = Node(data, self.head)
        self.head = node

    def insertAtEnd(self, data):
        if self.head is None:
            self.head = Node(data, None)
            return
        
        itr = self.head
        while itr.next:
            itr = itr.next
        
        itr.next = Node(data, None)

    def insertValues(self, dataList):
        self.head = None
        for data in dataList:
            self.insertAtEnd(data)

    def getLength(self):
        count = 0
        itr = self.head
        while itr:
            count+=1
            itr = itr.next
        return count
    
    def removeAt(self, index):
        if index < 0 or index>=self.getLength():
            raise Exception('Invalid Index')
        
        if index == 0:
            self.head = self.head.next
            return
        
        count = 0
        itr  = self.head
        while itr:
            if count == index - 1:
                itr.next = itr.next.next
                break
            count+=1  
            itr = itr.next

    def insertAt(self, index, data):
        if index < 0 or index>=self.getLength():
            raise Exception('Invalid Index')
        
        if index == 0:
            self.insertAtBeginning(data)
        
        count = 0
        itr = self.head
        while itr:
            if count == index - 1:
                node = Node(data,itr.next)
                itr.next = node
                break

            count+=1
            itr = itr.next

    def insertAfterValue(self,after, toBe):
        itr = self.head
        while itr:
            if itr.data == after:
                node = Node(toBe)
                node.next = itr.next
                itr.next = node
                break
            itr = itr.next

    def removeByValue(self,value):
        if self.head is None:
            return
        
        if self.head.data == value:
            self.head = self.head.next
            return

        itr = self.head
        while itr:
            if itr.next.data == value:
                itr.next = itr.next.next
                break
            itr = itr.next

    def print(self):
        if self.head is None:
            print('linked list is empty')
            return
        
        itr = self.head
        llstr = ''
        while itr:
            llstr += str(itr.data) + '-->'
            itr = itr.next

        print(llstr)


ll = Linkedlist()
# ll.insertAtBeginning(2)
# ll.insertAtEnd(234)
# ll.insertAtBeginning(23)
# ll.insertAtEnd(2344)
ll.insertValues([23,42,52,2,3523,13])
# print(ll.getLength())
# ll.print()
# ll.removeAt(2)
# ll.insertAt(2, 22)
# ll.insertAt(0,99)
# ll.insertAfterValue(23,25)
# ll.insertAfterValue(13,17)
# ll.removeByValue(3523)
# ll.removeByValue(23)
# ll.removeByValue(42)
ll.print()