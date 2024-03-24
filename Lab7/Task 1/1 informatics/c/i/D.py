x = input()
d = int(input())
cnt = 0
for i in x:
    cnt = cnt + (int(i) == d)
print(cnt)

