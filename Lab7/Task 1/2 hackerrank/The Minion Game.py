def minion_game(s):
    S = 0
    K = 0
    for i in range(0, len(s)):
        if "AEIOU".count(s[i]):
            K += len(s)-i
        else:
            S += len(s)-i
    res = 'Draw'
    if S > K:
        res = f'Stuart {S}'
    elif S < K:
        res = f'Kevin {K}'
    print(res)

if __name__ == '__main__':
    s = input()
    minion_game(s)