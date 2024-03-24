a = int(input())
b = int(input())
for i in range(a, b + 1):
    x = int(i**0.5)
    if x*x == i:
        print(i, end=" ")
