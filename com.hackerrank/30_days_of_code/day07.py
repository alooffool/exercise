#!/bin/python3

import sys


n = int(input().strip())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

output = ""
for j in range(0, n):
    # Index from end to beginning.
	output += str(arr[n-j-1]) + " "
print(output.strip())
