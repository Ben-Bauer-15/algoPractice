def activityNotifications(expenditure, d):
    answer = 0
    sorted = {}

    print(expenditure[:d])
    for j in range(d):
        if expenditure[j] in sorted:
            sorted[expenditure[j]] += 1

        else:
            sorted[expenditure[j]] = 1

    print(sorted)
    for key in sorted:
        print(key, sorted[key])

    # for i in range(d, len(expenditure)):
    #     trail = expenditure[i - d : i]
    #     # print(expenditure[i])
    #     # trail.sort()
    #     print(trail)
    #     medianIdx = int(len(trail) / 2)


    #     if len(trail) % 2 == 0:
    #         median = float((trail[medianIdx] + trail[medianIdx - 1]) / 2.0)
        
    #     else:
    #         median = float(trail[medianIdx])

    #     if expenditure[i] >= 2.0 * median:
    #         answer += 1


    #     print(median)
    # print(answer)
    # return answer

        


activity = [6,2,9,3,2,3,6,8,4,2,1]

d = 5

# activityNotifications(activity, 5)


def findMedian(arr):

    sorted = {}

    for num in arr:
        if num in sorted:
            sorted[num] += 1

        else:
            sorted[num] = 1

    medIdx = len(arr) / 2
    odd = (len(arr) % 2 != 0)

    arr.sort()
    i = 0
    lower = None
    upper = None

    for key in sorted:
        freq = sorted[key]

        for j in range(freq):
            i += 1
            if odd and i == medIdx:
                return key
            
            elif not odd and i == medIdx:
                lower = key

            elif not odd and i == medIdx + 1:
                upper = key
                return float(upper + lower) / float(2)


# print(findMedian(activity))