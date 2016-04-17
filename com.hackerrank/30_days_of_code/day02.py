#!/bin/python3

import sys

meal = float(sys.stdin.readline())
tip  = float(sys.stdin.readline())
tax  = float(sys.stdin.readline())

price = round(meal + meal*tip/100 + meal*tax/100)
print("The final price of the meal is $"+str(price)+".")
