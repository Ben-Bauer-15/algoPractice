def sockMerchant(n, ar):
    if n <= 1:
        return 0
    
    val = ar[0]
    for i in range(1, len(ar)):
        if ar[i] == val:
            ar.pop(i)
            ar.pop(0)
            return 1 + sockMerchant(n - 2, ar)
    


    ar.pop(0)
    return 0 + sockMerchant(n - 1, ar)


num = 9
ar = [10,10,20,20,30,30,50,60,70]
print(sockMerchant(num, ar))