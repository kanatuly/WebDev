def close_far(a, b, c):
  return (abs(a-b) <= 1 and min(abs(a-c), abs(b-c)) > 1) or (abs(a-c) <= 1 and min(abs(a-b), abs(b-c)) > 1)
