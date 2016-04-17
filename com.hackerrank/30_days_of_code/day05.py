#!/bin/python3

import sys

T = int(sys.stdin.readline())
for i in range(0, T):
    inputs = sys.stdin.readline().split()
    a = int(inputs[0])
    b = int(inputs[1])
    N = int(inputs[2])
    for j in range(0, N):
        output = ""
        term = a
        for k in range(0, N):
            term += b*2**k
            output += str(term) + " "
    print(output.strip()) # Remove trailing space.
