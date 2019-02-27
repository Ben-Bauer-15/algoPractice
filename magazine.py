def checkMagazine(magazine, note):
    magazineDict = {}
    for word in magazine:
        if not word in magazineDict:
            magazineDict[word] = 1
        
        else:
            magazineDict[word] += 1

    for word in note:
        if not word in magazineDict:
            print('No')
            return
        
        elif magazineDict[word] - 1 < 0:
            print('No')
            return

        else:
            magazineDict[word] -= 1
    

    print('Yes')

magazine = 'ive got a lovely bunch of coconuts'

note = 'ive got some coconuts'

checkMagazine(magazine, note)