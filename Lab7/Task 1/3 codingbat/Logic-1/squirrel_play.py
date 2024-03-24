def squirrel_play(temp, is_summer):
  return 60 <= temp and (temp <= 90 or (is_summer and temp <= 100))
