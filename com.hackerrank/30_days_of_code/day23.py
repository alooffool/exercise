    def levelOrder(self,root):
        #Write your code here
        allLevels = []
        currLevel = []
        children = []
        if root != None:
            currLevel.append(root)
        while (len(currLevel) > 0):
            node = currLevel.pop(0)
            allLevels.append(node.data)
            if (node.left != None):
                children.append(node.left)
            if (node.right != None):
                children.append(node.right)
            if len(currLevel) == 0:
                currLevel = children
                children = []
        print(' '.join(map(str, allLevels)))
