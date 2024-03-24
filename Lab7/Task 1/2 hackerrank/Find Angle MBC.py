import math

a = float(input())
b = float(input())
h = (a*a + b*b) ** 0.5

print(round(math.acos(b/h)*180/math.pi), end = "\u00b0")