t = int(input())
while t > 0:
    t -= 1
    n = int(input())
    a = list(map(int, input().split(' ')))
    l = 0
    r = n-1
    last = 1e10
    ok = True
    while l <= r:
        if max(a[l], a[r]) > last:
            ok = False
            break
        else:
            if a[l] > a[r]:
                last = a[l]
                l += 1
            else:
                last = a[r];
                r -= 1
    if ok:
        print("Yes")
    else:
        print("No")