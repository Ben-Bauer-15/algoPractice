class Solution():
    def longestCommonPrefix(self, strings):
        if not len(strings):
            return ""


        ans = ""
        charIdx = 0


        while charIdx < len(strings[0]):
            firstWordChar = strings[0][charIdx]
            for wordIdx in range(1, len(strings)):
                try:
                    charToCompare = strings[wordIdx][charIdx]
                    if charToCompare != firstWordChar:
                        return ans
                except:
                    return ans
            ans += firstWordChar
            charIdx += 1

        return ans
