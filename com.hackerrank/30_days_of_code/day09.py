#!/bin/python3

import sys


def find_gcd(a,b):
	#Write base condition
	if b == 0:
		return a
	return find_gcd(b,a%b)

#Take input
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

arr = [35, 105]

gcd=find_gcd(arr[0],arr[1])
print (gcd)
