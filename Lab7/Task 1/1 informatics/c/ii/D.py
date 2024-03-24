n = int(input())
while n > 1:
    if n%2:
        print("NO")
        exit(0)
    n /= 2
print("YES")