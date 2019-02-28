def sherlockAndAnagrams(s):

    alphaArr = []

    alphaDict = {}
    alphabet = 'abcdefghijklmnopqrstuvwxyz'


    for num in range(26):
        alphaArr.append(0)
        alphaDict[alphabet[num]] = num


    pairs = {}

    for i in range(len(s)):
        for j in range(i, len(s)):
            # print(i, j)
            sliced = s[i : j + 1]
            # print(sliced)
            sig = alphaArr[:]

            if sliced == s:
                continue

            for idx in range(len(sliced)):
                ltr = sliced[idx]
                location = alphaDict[ltr]
                sig[location] += 1

            sig = tuple(sig)

            if sig in pairs:
                pairs[sig] += 1
                
            else:
                pairs[sig] = 1

    answer = 0

    for key in pairs:
        n = pairs[key]
        combinations = int(n * (n - 1) / 2)
        answer += combinations

    print(answer)
    return answer

mom = 'mom'
abba = 'abba'
ifailuhkqq = 'ifailuhkqq'
kkkk = 'kkkk'
cdcd = 'cdcd'

sherlockAndAnagrams(kkkk)