#!/bin/python3

import sys


n = int(input().strip())

# Create dictionary.
dictionary = {}
for i in range(n):
	key = sys.stdin.readline().strip()
	value = sys.stdin.readline().strip()
	dictionary[key] = value

# Perform lookups.
for line in sys.stdin:
	key = line.strip()
	try:
		result = dictionary[key]
		print(key+"="+result)
	except:
		print("Not found")
