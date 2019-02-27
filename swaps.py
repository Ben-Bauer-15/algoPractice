def minimumSwaps(arr):
    places = []
    visited = []
    for i in range(len(arr)):
        places.append((arr[i], i + 1))
        visited.append(False)

    places.sort()
    answer = 0

    for i in range(len(arr)):
        # print(i, visited[i], places[i])
        if visited[i] or places[i][1] == i + 1:
            continue

        cycleSize = 0
        j = i
        while not visited[j]:
            visited[j] = True
            j = places[j][1] - 1
            cycleSize += 1
            # print('j is ', j, 'visited j is ', visited[j], 'places i j is ', places[j][1], 'cycle size is ', cycleSize)

        answer += (cycleSize - 1)
    
    print(answer)
    return answer


arr2 = [4,3,1,2]
arr3 = [2,3,4,1,5]
arr4 = [1,3,5,2,4,6,7]

tests = [arr2, arr3, arr4]

minimumSwaps(arr4)

