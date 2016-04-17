#!/bin/python3

import sys


n = int(input().strip())
output = ""
for i in range(0, n):
	output += "#"
	print(output.rjust(n))
