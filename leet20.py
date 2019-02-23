class Solution():
    def isValid(self, s):
        if len(s) % 2 != 0:
            print('odd length')
            return False

        myQ = []

        closing = {')' : '(', ']' : '[', '}' : '{'}

        for char in s:
            if char in closing:
                if not myQ or myQ.pop() != closing[char]:
                    return False
            
            else:
                myQ.append(char)


        if myQ:
            print('len is gt 0')
            return False
        return True

