#TODO: Come back to this one




class ListNode():
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution():
    def mergeTwoLists(self, l1, l2):
        pass


class SLL():
    def __init__(self):
        self.head = None
    
    def append(self, val):
        if not self.head:
            self.head = ListNode(val)
            return self
        
        runner = self.head
        while runner.next:
            runner = runner.next
        
        runner.next = ListNode(val)
        return self
    
    def printList(self):
        if not self.head:
            print('list is empty')
            return self
        runner = self.head
        while runner.next:
            print('value is ' + str(runner.val))
            runner = runner.next
        
        print('value is ' + str(runner.val) + ' at the end of the list')

        

sll1 = SLL()

sll1.append(5).append(13).append(20)

sll2 = SLL()

sll2.append(10).append(11).append(13)

soln = Solution()

soln.mergeTwoLists(sll1, sll2)