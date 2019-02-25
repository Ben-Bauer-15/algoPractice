def repeatedString(s,n):
    if s == '':
        return 0

    
    answer = 0
    numInSubstring = 0
    for char in s:
        if char == 'a':
            numInSubstring += 1



    multiplier = int(n / len(s))
    print(multiplier)
    answer = multiplier * numInSubstring

    remainingChars = n % len(s)

    truncated = s[:remainingChars]
    for char in truncated:
        if char == 'a':
            answer += 1

    return answer

param = 'aba'
print(repeatedString(10, param))
