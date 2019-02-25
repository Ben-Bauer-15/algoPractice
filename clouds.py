def jumpingOnClouds(c):
    if len(c) == 1 and c[0] == 0:
        return 0

    if len(c) == 2 and c[1] == 0:
        return 1
    
    if c[1] == 0 and c[2] == 0:
        return0 = jumpingOnClouds(c[1:])
        return1 = jumpingOnClouds(c[2:])

        if return0 < return1:
            return 1 + return0
        return 1 + return1
    
    if c[1] == 1 and c[2] == 0:
        return 1 + jumpingOnClouds(c[2:])
    
    if c[1] == 0 and c[2] == 1:
        return 1 + jumpingOnClouds(c[1:])

    
param = [0,0,0,1,0,0]
print(jumpingOnClouds(param))