def alarm_clock(day, vacation):
  if not vacation and day % 6: return '7:00'
  if vacation and day % 6 == 0: return 'off'
  return '10:00'
