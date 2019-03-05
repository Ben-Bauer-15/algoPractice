def freqQuery(queries):
    answer = []

    numbers = {}

    frequencies = {}
    
    for query in queries:
        if query[0] == 1:

            # this is the original frequency of the search query
            original = None

            # this will be the updated frequency of the query
            freq = None

            if query[1] in numbers:
                original = numbers[query[1]]
                numbers[query[1]] += 1
            else:
                original = 1
                numbers[query[1]] = original
            

            # perform a search for the original and update it within frequencies if it exists
            if original in frequencies and frequencies[original] > 0:
                frequencies[original] -= 1

            freq = numbers[query[1]]

            if freq in frequencies:
                frequencies[freq] += 1
            else:
                frequencies[freq] = 1


        elif query[0] == 2:
            # since this is a delete operation, only perform an update if the queried number exists
            if query[1] in numbers:

                # this is the original frequency of the search query
                original = numbers[query[1]]

                if frequencies[original] > 0:
                    frequencies[original] -= 1

                numbers[query[1]] -= 1

                # this is the updated frequency of the query
                freq = numbers[query[1]]

                if freq > 0:
                    if freq in frequencies:
                        frequencies[freq] += 1
                    else:
                        frequencies[freq] = 1
            
        elif query[0] == 3:
            freq = query[1]

            if freq in frequencies and frequencies[freq] > 0:
                print(1)
                answer.append(1)

            else:
                print(0)
                answer.append(0)
        # print(numbers)
        # print(frequencies)
    return answer

query1 = [[1,1],[3,1],[2,2],[3,2],[1,1],[1,1],[2,1],[2,1],[3,1]]

freqQuery(query1)