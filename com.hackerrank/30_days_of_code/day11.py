#!/bin/python3

import sys


arr = []
for arr_i in range(6):
   arr_t = [int(arr_temp) for arr_temp in input().strip().split(' ')]
   arr.append(arr_t)

def add_hourglass(row, col):
	return \
		arr[row-1][col-1] + arr[row-1][col] + arr[row-1][col+1] + \
		arr[row][col] + \
		arr[row+1][col-1] + arr[row+1][col] + arr[row+1][col+1]

max_sum = None
for row in range(1, 5):
	for col in range(1, 5):
		hourglass = add_hourglass(row, col)
		if max_sum is None:
			max_sum = hourglass
		else:
			max_sum = max(max_sum, hourglass)
print(max_sum)
