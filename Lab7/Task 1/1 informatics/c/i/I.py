x = int(input())
cnt = 0
for d in range(1, int(x**0.5) + 1):
    if x%d == 0:
        cnt = cnt + 2 - (d*d == x)
print(cnt)