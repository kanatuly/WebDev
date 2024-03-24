def date_fashion(you, date):
  if min(you, date) <= 2: return 0
  if max(you, date) >= 8: return 2
  return 1
