def countSwaps(a):
    swaps = 0
    for i in range(len(a)):
        for j in range(len(a) - 1):
            # print(a)
            # print(i, j)
            if a[j] > a[j + 1]:
                tmp = a[j + 1]
                a[j + 1] = a[j]
                a[j] = tmp
                swaps += 1

    print('Array is sorted in ' + str(swaps) + ' swaps.')
    print('First element: ' + str(a[0]))
    print('Last element: ' + str(a[len(a) - 1]))



arr = [3,2,1]

countSwaps(arr)

