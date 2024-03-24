s = input()
n = 0
p = 1
for d in s[::-1]:
    n += p * (d == '1')
    p *= 2
print(n)