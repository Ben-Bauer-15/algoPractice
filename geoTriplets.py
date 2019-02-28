def countTriplets(arr, r):
    leftMap = {}
    rightMap = {}

    for i in range(1, len(arr)):
        if not arr[i] in rightMap:
            rightMap[arr[i]] = 1
        else:
            rightMap[arr[i]] += 1
    
    leftMap[arr[0]] = 1

    answer = 0

    for j in range(1, len(arr) - 1):
        rightMap[arr[j]] -= 1

        leftVal = int(arr[j] / r)
        rightVal = int(arr[j] * r)


        try:
            leftFreq = leftMap[leftVal]
            rightFreq = rightMap[rightVal]
        
            answer += (leftFreq * rightFreq)

        except:
            pass

        if not arr[j] in leftMap:
            leftMap[arr[j]] = 1
        else:
            leftMap[arr[j]] += 1
        

    print(answer)
    return answer




one = [1, 2, 2, 4]
two = [1, 3, 9, 9, 27, 81]
three = [5,5,5,5,5,5,5]


countTriplets(three, 1)