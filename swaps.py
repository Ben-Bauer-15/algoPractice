def minimumSwaps(arr):

    # swapIndices = []

    # for i in range(len(arr) - 1):
    #     for j in range(i + 1, len(arr)):
    #         if arr[i] > arr[j]:
    #             swapIndices.append([i, j])

    # if len(swapIndices) == 0:
    #     return 0

    # numSwaps = []

    # for swap in swapIndices:
    #     newList = arr[:]
    #     temp = newList[swap[0]]
    #     newList[swap[0]] = newList[swap[1]]
    #     newList[swap[1]] = temp
    #     numSwaps.append(1 + minimumSwaps(newList))
    
    # return min(numSwaps)

    



arr = [1,72,73,2354,3]
arr2 = [4,3,1,2]
arr3 = [2,3,4,1,5]
arr4 = [1,3,5,2,4,6,7]
print(minimumSwaps(arr4))