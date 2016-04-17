import re

S = input()

pattern = re.compile(r'[a-zA-Z]+')
matches = pattern.findall(S)
length = len(matches)

print(length)
for i in range(length):
    print(matches[i])
