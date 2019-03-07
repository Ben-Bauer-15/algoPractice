def makeAnagram(a, b):
    sigA = []
    sigB = []
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    mapAlpha = {}
    key = 0
    for ltr in alphabet:
        mapAlpha[ltr] = key
        key += 1
        sigA.append(0)
        sigB.append(0)
    answer = 0
    for ltr in a:
        sigA[mapAlpha[ltr]] += 1
    for ltr in b:
        sigB[mapAlpha[ltr]] += 1
    for idx in range(26):
        diff = sigA[idx] - sigB[idx]
        if diff < 0:
            diff = -1 * diff
        answer += diff
    return answer





a = 'fcrxzwscanmligyxyvym'
b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'

makeAnagram(a,b)
