def rotLeftV1(a, d):
    numRotations = d % len(a)

    for r in range(numRotations):
        stack = []
        for i in range(1, len(a)):
            stack.append(a[i])
        
        stack.append(a[0])
        a = stack

    return a

a = [1,2,3,4,5,6]
d = 3

rotLeftV1(a, d)

def rotLeftV2(a, d):
    numRotations = d % len(a)
    newIndices = {}

    answer = []
    for i in range(len(a)):
        answer.append(None)
        if i - numRotations < 0:
            newIdx = len(a) - (-1 * (i - numRotations))
            newIndices[i] = newIdx

        elif i - numRotations == 0:
            newIndices[i] = 0

        else:
            newIdx = i - numRotations
            newIndices[i] = newIdx


    for idx in newIndices:
        answer[newIndices[idx]] = a[idx]

    print(answer)
    return answer



rotLeftV2(a, d)

