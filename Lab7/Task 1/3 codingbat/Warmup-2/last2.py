def last2(s):
  res = 0
  t = s[len(s)-2:]
  for i in range(len(s)-2):
    res += t == s[i:i+2]
  return res