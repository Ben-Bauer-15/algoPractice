import random
def hourglassSum(arr):
    maxHourglass = 0
    for i in range(4):
        for j in range(4):
            hourglass = [arr[i][j], arr[i][j + 1], arr[i][j + 2], arr[i + 1][j + 1], arr[i + 2][j], arr[i + 2][j + 1], arr[i + 2][j + 2]]
            temp = 0
            for num in hourglass:
                temp += num
            
            if (i == 0 and j == 0):
                maxHourglass = temp

            if temp > maxHourglass:
                maxHourglass = temp


    print(maxHourglass)
    return maxHourglass


    



def random2DArr():
    myArr = []
    for i in range(6):
        myArr.append([])
        for j in range(6):
            myArr[i].append(random.randint(-50, 50))

    
    return myArr


test1 = [[-9,-9,-9,1,1,1], [0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0]]
test2 = [[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]]


test3 = [[-1,-1,0,-9,-2,-2],[-2,-1,-6,-8,-2,-5],[-1,-1,-1,-2,-3,-4],[-1,-9,-2,-4,-4,-5],[-7,-3,-3,-2,-9,-9],[-1,-3,-1,-2,-4,-5]]
hourglassSum(test3)