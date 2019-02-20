def ack(m,n):
    if m == 0:
        return n + 1

    elif m > 0 and n == 0:
        return ack(m - 1, 1)
        
    elif m > 0 and n > 0:
        return ack(m - 1, ack(m, n - 1))



a = ack(4 , 3)

print(a)