n = int(input())
a = map(int, input().split(' '))
print(*filter(lambda x: x%2 == 0, a))