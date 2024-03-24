def sum13(nums):
  res = 0
  i = 0
  while i < len(nums):
    if nums[i] == 13:
      i += 2
    else:
      res += nums[i]
      i += 1
  return res
