def minimumBribes(q):
    swaps = {}
    for i in range(len(q)):
        swaps[q[i]] = 0
    

    answer = 0
    
    for i in range(len(q) - 1):
        for j in range(i + 1, len(q)):
            if q[i] > q[j]:
                swaps[q[i]] += 1
                if swaps[q[i]] > 2:
                    print('Too chaotic')
                    return

                answer += 1
                temp = q[i]
                q[i] = q[j]
                q[j] = temp

    print('answer from v1 is ', answer)


q1 = [1,2,5,3,4,7,8,6]
q2 = [5,1,2,3,7,8,6,4]
q3 = [2,5,1,3,4]
q4 = [2,1,5,3,4]



q5 = [1,2,5,3,7,8,6,4]
# minimumBribes(q4)

def minimumBribesV2(q):
    answer = 0

    for i in range(len(q) - 1, -1, -1):
        if q[i] - 1 - i > 2:
            print('Too chaotic')
            return

        for j in range(max([0, q[i] - 2]), i):
            if q[j] > q[i]:
                answer += 1

    print(answer)




minimumBribesV2(q5)
