def solution(s):
    if s == '':
        return 0
    
    if len(s) == 1:
        return 1

    answer = ''
    temp = ''
    for i in range(len(s) - 1):
        j = i
        while  j < len(s) and s[j] not in temp:
            temp += s[j]
            j += 1
        if len(temp) > len(answer):
            answer = temp
        temp = ''
    
    return len(answer)

print(solution('  '))


x = 'abc'

x.index


