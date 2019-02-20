def pythag(arr):
    if len(arr) < 3:
        return False
    
    else:
        for i in range(len(arr) - 2):
            for j in range(i + 1, len(arr) - 1):
                for k in range(j + 1, len(arr)):
                    if arr[i]**2 + arr[j]**2 == arr[k]**2:
                        return True
                    if arr[i]**2 + arr[k]**2 == arr[j]**2:
                        return True
                    if arr[k]**2 + arr[j]**2 == arr[i]**2:
                        return True
        

        return False

myarr = [13,12,2,2,5]
print(pythag(myarr))