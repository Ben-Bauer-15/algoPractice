##replaces all occurrences of each word in arr with x's
def replace(my_string, arr):
    ans = []
    for letter in my_string:
        ans.append(letter)

    for word in arr:
        i = 0
        j = len(word)
        while j < len(my_string):
            if my_string[i : j] == word:
                substring = my_string[i : j]
                for k in range(i , j):
                    ans[k] = 'x'
                i += len(word)
                j += len(word)
            
            else:
                i += 1
                j += 1
        
    my_string = ''
    for i in ans:
        my_string += i
    return my_string


array = ['crack', 'poop']
my_string = 'snap crackle pop, nincompoop!'
print(replace(my_string, array))

                

