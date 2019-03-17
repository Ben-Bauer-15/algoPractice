function whatFlavors(cost, money){
    var prices = {};

    for (var i = 0; i < cost.length; i++){
        if (cost[i] in prices){
            prices[cost[i]].push(i + 1);
        } else {
            prices[cost[i]] = [i + 1];
        }
    }

    var i = 1;

    // console.log(prices)

    while (i <= money / 2){

        // console.log(i, money - i)    
        if (i in prices && money - i in prices){
            
            var max, min;

            if (i == money - i){
                max = (prices[i][0] > prices[i][1]) ? prices[i][0] : prices[i][1]
                min = (prices[i][0] < prices[i][1]) ? prices[i][0] : prices[i][1]
            }

            else {
                max = (prices[i][0] > prices[money - i][0]) ? prices[i][0] : prices[money - i][0];
                min = (prices[i][0] < prices[money - i][0]) ? prices[i][0] : prices[money - i][0];
            }

            console.log(min, max);
            return min, max;
        }

        i ++;

    }


}

var cost = [1,2,3,5,6]

whatFlavors(cost, 5)