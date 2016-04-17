def isPrime(number):
	factor = 2
	while factor * factor <= number:
		if number % factor == 0:
			return False
		factor += 1
	# 1 is not a prime number.
	return number != 1

numCases = int(input())

for i in range(numCases):
    case = int(input())
    print("Prime" if isPrime(case) else "Not prime")
