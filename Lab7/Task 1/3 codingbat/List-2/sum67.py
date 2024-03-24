def sum67(a):
  res = 0
  skip = False
  for i in range(len(a)):
    if a[i] == 7:
      if skip:
        skip = False
        continue
    if a[i] == 6:
      skip = True
    if skip: continue
    res += a[i]
  return res
