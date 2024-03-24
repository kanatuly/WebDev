def has22(a):
  for i in range(len(a)-1):
    if a[i] == 2 and a[i+1] == 2:
      return True
  return False
