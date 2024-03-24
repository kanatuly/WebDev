def round_sum(a, b, c):
  def round10(n):
    return n+5 - (n+5)%10
  return sum(round10(x) for x in [a, b, c])
