class Solution():
    def romanToInt(self, s):
        values = {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50,
                    'C' : 100, 'D' : 500, 'M' : 1000}

        exceptions = ['IV', 'IX', 'XL', 
                        'XC', 'CD', 'CM']
                    

        total = 0
        foundException = False

        for i in range(1, len(s)):
            sliced = s[i - 1 : i + 1]
            if not foundException:
                if sliced in exceptions:
                    foundException = True
                    subtractor = sliced[0]
                    value = values[sliced[1]] - values[subtractor]
                    total += value

                else:
                    value = values[sliced[0]]
                    total += value

            else:
                foundException = False

        if not foundException:
            sliced = s[len(s) - 1]
            value = values[sliced]
            total += value
        return total