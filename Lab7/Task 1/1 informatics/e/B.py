def power(a, n):
    res = 1
    while n > 0:
        res *= a
        n -= 1
    return res


a, n = input().split(' ')
print(power(float(a), int(n)))