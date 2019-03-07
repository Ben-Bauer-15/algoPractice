def alternatingCharacters(s):
    answer = 0

    i = 0

    while i < len(s) - 1:
        cur = s[i]
        deleted = False
        while i < len(s) - 1 and cur == s[i + 1]:
            deleted = True
            i += 1
            answer += 1
            
        if not deleted:
            i += 1

    print(answer)
    return answer


s = 'ABABBBABAAAAA'

alternatingCharacters(s)

# len = 7
# i = 7
# cur = 'b'
# s[i + 1] = 'b'
# ans = 2


