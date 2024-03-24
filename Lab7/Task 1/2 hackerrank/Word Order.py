n = int(input())
d = {}

while n:
    s = input()
    if d.get(s):
        d[s] += 1
    else:
        d[s] = 1
    n -= 1

print(*d.values())

