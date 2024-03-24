#!/bin/python3

import math
import os
import random
import re
import sys

def solve(s):

    cnt = {}
    for x in s:
        if cnt.get(x):
            cnt[x] += 1
        else:
            cnt[x] = 1

    a = list(cnt.items())

    a = sorted(a, key=lambda x: (-x[1], x[0]))[:3]

    for x, y in a:
        print(x, y)

if __name__ == '__main__':
    s = input()
    solve(s)