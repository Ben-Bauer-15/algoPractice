class Solution():
    def removeDuplicates(self, arr):
        print(arr)
        for i in range(len(arr)):
            if i != len(arr) - 1:
                print('i is', i)
                try:
                    while arr[i] == arr[i + 1]:
                        # self.swapVals(arr, i, len(arr) - 1)
                        # arr.pop()
                        # # self.swapVals(arr, i + 1, len(arr) - 1)
                        arr.pop(i)
                        # print(arr)
                except:
                    print(arr)
                    return len(arr)




soln = Solution()
arr = [10,10,10,11,11,11,12,13,14,15,15,15]
soln.removeDuplicates(arr)