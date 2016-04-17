    def removeDuplicates(self,head):
        #Write your code here
        curr = head
        while curr.next != None:
            if curr.next.data == curr.data:
                curr.next = curr.next.next
            else:
                curr = curr.next
        return head
