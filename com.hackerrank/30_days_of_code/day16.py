#!/bin/python3

import sys


N = int(input())

arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]
arr.sort()
output = ""
min_diff = None

for i in range(N-1):
    diff = arr[i+1] - arr[i]
    pair = str(arr[i])+" "+str(arr[i+1])+" "
    if ((min_diff is None) or (diff < min_diff)):
        min_diff = diff
        # Start a new list.
        output = pair
    elif (diff == min_diff):
        output += pair

print(output.strip())
