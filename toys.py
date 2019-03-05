def maximumToys(prices, k):

    prices.sort()

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

