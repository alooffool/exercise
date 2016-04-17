    def insert(self,head,data):
    #Complete this method
        new = Node()
        new.data = data
        current = head
        if (current is None):
            print("None")
            current = new
        else:
            print("loop")
            # Go to the last element.
            while current.next:
                current = current.next
            current.next = new
        self.display(new)
        print("head %d" % head.data)
        return head
