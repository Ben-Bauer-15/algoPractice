class Solution():
    def isPalindrome(self, x):
        if x < 0:
            print('less than 0')
            return False

        elif type(x) != int:
            print('not an int')
            return False
        
        else:
            upperMag = self.findMagnitude(x)
            lowerMag = 10

            while upperMag != lowerMag and upperMag > lowerMag:
                upperDigit = self.getDigit(upperMag, x)
                lowerDigit = self.getDigit(lowerMag, x)
                if upperDigit != lowerDigit:
                    return False

                upperMag /= 10
                lowerMag *= 10

            
            return True

        

    def getDigit(self, place, number):
        return (number % place) / (place / 10)


    def findMagnitude(self, number):
        magnitude = 1
        while number >= magnitude:
            magnitude *= 10

        return magnitude


soln = Solution()

input = 10

print(soln.isPalindrome(input))