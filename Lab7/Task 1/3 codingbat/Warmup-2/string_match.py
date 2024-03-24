def string_match(a, b):
  res = 0
  for i in range(min(len(a), len(b))-1):
    res += a[i] == b[i] and a[i+1] == b[i+1]
  return res
