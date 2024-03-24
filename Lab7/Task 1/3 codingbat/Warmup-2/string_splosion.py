def string_splosion(s):
  res = ""
  for i in range(len(s)):
    res += s[:i+1]
  return res
