def pos_neg(a, b, negative):
  return (negative and max(a, b) < 0) or (not negative and min(a, b) < 0 and max(a, b) > 0)
