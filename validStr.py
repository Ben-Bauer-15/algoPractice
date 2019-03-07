def isValid(s):
    map = {}
    for char in s:
        if char in map:
            map[char] += 1

        else:
            map[char] = 1

    freqs = {}
    for key in map:
        if map[key] in freqs:
            freqs[map[key]] += 1
        else:
            freqs[map[key]] = 1

    print(freqs)

    if len(freqs) > 2:
        return 'NO'

    elif len(freqs) == 1:
        return 'YES'
    
    elif len(freqs) == 2:
        larger = None
        smaller = None

        for key in freqs:
            if not larger and not smaller:
                larger = {'freq' : key, 'ltrs' : freqs[key]}

            elif not smaller and freqs[key] > larger['ltrs']:
                smaller = larger
                
                larger = {'freq' : key, 'ltrs' : freqs[key]}

            elif not smaller and freqs[key] < larger['ltrs']:
                smaller = {'freq' : key, 'ltrs' : freqs[key]}

            elif not smaller and freqs[key] == larger['ltrs']:
                return 'NO'

        print(larger, smaller)
        if smaller['ltrs'] == 1:
            if smaller['freq'] - 1 == larger['freq']:
                return 'YES'
            
            elif smaller['freq'] - 1 == 0:
                return 'YES'
            
            else:
                return 'NO'
        
        else:
            return 'NO'


s1 = 'abcdefghhgfedecba'
s2 = 'aabbc'

isValid(s2)