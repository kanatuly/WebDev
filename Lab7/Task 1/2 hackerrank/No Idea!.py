n, m = map(int, input().split(' '))
arr = list(map(int, input().split(' ')))
A = set(map(int, input().split(' ')))
B = set(map(int, input().split(' ')))

res = 0

for x in arr:
    if x in A:
        res += 1
    elif x in B:
        res += -1

print(res)