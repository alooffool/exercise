#!/bin/python3

import sys


T = int(input().strip())

for line in range(T):
	n = int(input().strip())
	print("{0:b}".format(n))
