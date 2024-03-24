def count_code(s):
    return sum(s[i] == 'c' and s[i + 1] == 'o' and s[i + 3] == 'e' for i in range(len(s) - 3))
