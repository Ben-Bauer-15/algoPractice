def arrayManipulation(n, queries):
    answer = []
    for i in range(n):
        answer.append(0)

    
    for j in range(len(queries)):
        row = queries[j]
        start = row[0]
        end = row[1]
        add = row[2]

        answer[start - 1] += add
        if end < n:
            answer[end] -= add
        
    
    maximum = answer[0]
    runningTotal = answer[0]
    for k in range(1, len(answer)):
        runningTotal += answer[k]

        if runningTotal > maximum:
            maximum = runningTotal


    return maximum


queries1 = [[1,5,3], [4,8,7], [6,9,1]]
queries2 = [[1,2,100], [2, 5, 100], [3, 4, 100]]

arrayManipulation(5, queries2)