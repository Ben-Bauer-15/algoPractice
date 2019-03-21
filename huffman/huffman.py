class Node:
    def __init__(self, char, freq = 1):
        self.char = char
        self.freq = freq
        self.next = None
        self.left = None
        self.right = None


    def incFreq(self):
        self.freq += 1

    
    def __str__(self):
        return str((self.char, self.freq, self.left, self.right))

class PriQueue:
    def __init__(self):
        self.head = None
        self.size = 0


    def insert(self, node):
        self.size += 1
        if not self.head:
            self.head = node
            return self
        
        elif self.head.freq > node.freq:
            node.next = self.head
            self.head = node
            return self

        else:
            runner = self.head
            while runner.next and runner.next.freq < node.freq:
                runner = runner.next
            node.next = runner.next
            runner.next = node
            return self
    
    def printQueue(self):
        if not self.head:
            print("Queue is empty")
        
        else:
            runner = self.head
            while runner:
                print(runner)
                runner = runner.next
            
        return self

    
    def pop(self):
        if not self.head:
            raise IndexError('Queue is empty!')
        
        n = self.head
        self.head = n.next
        self.size -= 1
        return n


    def getSize(self):
        return self.size


def generateFrequencies(filePath):
    f = open(filePath,'r')

    content = f.read()
    freqs = {}


    for char in content:
        if char in freqs:
            freqs[char] += 1
        else:
            freqs[char] = 1


    q = PriQueue()

    for char in freqs:
        n = Node(char, freqs[char])
        q.insert(n)

    f.close()

    return q


def inOrder(node):
    if not node:
        return
    
    inOrder(node.left)
    print(node)
    inOrder(node.right)


def generateEncodingTree(q):

    while q.getSize() > 1:
        n1 = q.pop()
        n2 = q.pop()

        root = Node(None, n1.freq + n2.freq)

        root.right = n1
        root.left = n2

        q.insert(root)

    return q

def generateEncodingMap(root, path, map):
    if root.char != None:
        map[root.char] = path
        return
    
    generateEncodingMap(root.left, path + '0', map)
    generateEncodingMap(root.right, path + '1', map)

def compress(oldFilePath, newFilePath):

    q = generateFrequencies(oldFilePath)

    root = generateEncodingTree(q).head

    map = {}
    generateEncodingMap(root,'', map)
    # print(map)

    newFile = open(newFilePath, 'w')
    oldFile = open(oldFilePath, 'r')

    for char in oldFile.read():
        newFile.write(map[char])

    newFile.close()
    oldFile.close()
    return root





def uncompress(oldFilePath, newFilePath, root):
    old = open(oldFilePath, 'r')
    new = open(newFilePath, 'w')

    contents = old.read()
    i = 0
    nxt = root

    while i < len(contents):
        direction = int(contents[i])

        if direction == 0:
            nxt = nxt.left
            
        if direction == 1:
            nxt = nxt.right
        
        if nxt.char != None:
            new.write(nxt.char)
            nxt = root



        i += 1



root = compress('./warAndPeace.txt', './warAndPeaceCompressed.txt')


uncompress('./warAndPeaceCompressed.txt', './uncompressedwarAndPeace.txt', root)




