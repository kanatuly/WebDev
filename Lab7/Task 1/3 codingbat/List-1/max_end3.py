def max_end3(a):
  a[0] = max(a[0], a[2])
  a[1] = a[2] = a[0]
  return a
