def caught_speeding(speed, is_birthday):
  if speed <= 60 + 5 * is_birthday: return 0
  if speed <= 80 + 5 * is_birthday: return 1
  return 2
