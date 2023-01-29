class Node:
    def __init__(self, data=None, next=None, prev=None):
        self.data = data
        self.next = None
        self.prev = None


class DbLinkedlist:
    def __init__(self):
        self.head = None
    
    def inserAtBeginning(self, value):
        if self.head is None:
            node = Node(value, self.head, None)
            self.head = node
        else:
            newNode = Node(value,self.head,None)
            self.head.prev = newNode
            self.head = newNode

    def inserAtEnd(self, value):
        pass
    
    def printForward(self):
        if self.head is None:
            print('dblinkedlist is empty')
            return

        llstr = ''
        itr = self.head
        while itr:
            llstr += str(itr.data) + '-->'
            itr = itr.next
        
        print(llstr)

    def printBackward(self):
        pass

        


dbll = DbLinkedlist()
dbll.inserAtBeginning(23)
dbll.inserAtBeginning(43)
dbll.printForward()