def isFunny(string):
    length = len(string)
    # At the midpoint of the string, further comparisons are redundant.
    # An even length N and an odd length N-1 require the same number of comparisons.
    # Use integer division to avoid importing math.ceil() to handle odd lengths.
    comparisons = length//2 + length%2 - 1
    # Compare the gaps from both directions.
    for i in range(comparisons):
        gap_forward = abs(ord(string[i]) - ord(string[i+1]))
        gap_reverse = abs(ord(string[length-i-1]) - ord(string[length-i-2]))
        if gap_forward != gap_reverse:
            return False
    return True

numCases = int(input())

for i in range(numCases):
    case = input()
    print("Funny" if isFunny(case) else "Not Funny")
