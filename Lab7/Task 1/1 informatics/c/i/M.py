n = int(input())
cnt = 0
for _ in range(0, n):
    cnt += input() == "0"
print(cnt)