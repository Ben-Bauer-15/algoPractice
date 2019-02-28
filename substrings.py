def twoStrings(s1, s2):
    # stringDict = {}
    # for char in s1:
    #     stringDict[char] = True

    for char in s2:
        if char in s1:
            print("YES")
            return "YES"

    
    print("NO")
    return "NO"

s1 = 'hello'
s2 = 'world'

twoStrings(s1, s2)