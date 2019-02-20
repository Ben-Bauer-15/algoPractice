import math
class Solution(object):
    def reverse(self, x):
        # edge case: x is not an int
        if type(x) != int:
            print('not an int!')
            return 0
        
        # edge case: x is too large or too small to be Int32
        elif not self.isInt32(x):
            print('too large or too small!')
            return 0
        
        else:
            
            index = 0
            numArray = []
            sign = ''

            if x < 0:
                index = 1
                sign = '-'
        
            
            numArray = self.numToArray(x, index)
            for i in range(len(numArray) / 2):
                temp = numArray[i]
                numArray[i] = numArray[len(numArray) - i -1]
                numArray[len(numArray) - i - 1] = temp
            
            answer = sign
            for j in range(len(numArray)):
                answer += numArray[j]
            

            if not self.isInt32(int(answer)):
                return 0

            return int(answer)



    def numToArray(self, number, startIdx):
        answer = []
        stringNum = str(number)
        for i in range(startIdx, len(stringNum)):
            answer.append(stringNum[i])


        return answer

    def isInt32(self, number):
        upperbound = int(math.pow(2, 31) - 1)
        lowerbound = int(-1 * math.pow(2, 31))
        if number > upperbound or number < lowerbound:
            return False

        return True