def maximumToys(prices, k):

    prices.sort()

    # new = []

    # for price in prices:
    #     if price < k:
    #         new.append(price)
    
    # for i in range(len(new)):
    #     swaps = False
    #     for j in range(len(new) - 1):
    #         if new[j] > new[j + 1]:
    #             swaps = True
    #             new[j], new[j + 1] = new[j + 1], new[j]

    #     if not swaps:
    #         break

    items = 0
    total = 0
    for price in prices:
        if k - price > 0:
            k -= price
            total += price
            items += 1
    
    print(items)
    return items




prices = [15,5,2,4,1,3,40]
k = 7
maximumToys(prices, k)

