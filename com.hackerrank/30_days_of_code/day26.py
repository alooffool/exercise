import sys

class Date:
    def __init__(self):
        input = sys.stdin.readline().split()
        self.day   = int(input[0])
        self.month = int(input[1])
        self.year  = int(input[2])

dateReturned = Date()
dateDue      = Date()

if (dateReturned.year > dateDue.year):
	fine = 10000
elif (dateReturned.month > dateDue.month):
	fine = 500 * (dateReturned.month - dateDue.month)
elif (dateReturned.day > dateDue.day):
	fine = 15 * (dateReturned.day - dateDue.day)
else:
	fine = 0

print(fine)
