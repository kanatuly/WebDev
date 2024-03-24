def min(a, b, c, d):
    return sorted([a, b, c, d])[0]


a, b, c, d = map(int, input().split(' '))
print(min(a, b, c, d))