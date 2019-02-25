def countingValleys(n, s):
    elevation = 0
    valleys = 0
    inValley = False
    map = {'D' : -1, 'U' : 1}
    for char in s:
        # print(char)
        change = map[char]
        elevation += change
        # print(elevation)
        if inValley and elevation == 0:
            valleys += 1

        if elevation < 0:
            inValley = True
        elif elevation > 0: 
            inValley = False

    return valleys
        
param = 'UDDDUDUUUDDUDU'
print(countingValleys(10, param))