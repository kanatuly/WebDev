def lucky_sum(a, b, c):
  res = 0
  for x in a, b, c:
    if x == 13: break
    res += x;
  return res
