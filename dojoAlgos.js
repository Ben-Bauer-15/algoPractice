function twoFifty(){
        for (var i = 1; i < 256; i++){
                console.log(i)
        }

}

function oddThousand(){
        for (var i = 1; i < 1001; i++){
                if (i%2 != 0){
                        console.log(i)
                }
        }
}

function sumOddFiveThousand(){
        var sum = 0
        for (var i = 1; i < 5000; i++){
                if (i % 2 != 0){
                        sum += i
                        // console.log(sum)

                }
                // console.log(i)
        }

        // console.log(sum)
}

function printArr(arr){
        for (var i = 0 ; i < arr.length; i++){
                console.log(arr[i])
        }
}


function maxArr(arr){
        var max = arr[0]
        for (var i = 1; i < arr.length; i++){
                if (arr[i] > max){
                        max = arr[i]
                }
        }
        console.log(max)
}

function avgArr(arr){
        var sum = 0
        for (var i = 0 ; i < arr.length; i++){
                sum += arr[i]
        }

        console.log(sum/arr.length)

}

function oddArr(){
        var y = []
        for (var i = 1; i < 256; i+= 2){
                y.push(i)
        }
        console.log(y)
}

function greaterThan(arr, y){
        var ans = 0
        for (var i = 0; i < arr.length; i++){
                if (arr[i] > y){
                        ans++
                }
        }

        console.log(ans)
}


function linSearch(arr, num){
        for (var i = 0; i < arr.length; i++){
                if (arr[i] == num){
                        console.log(i)
                        return
                }
        }
        console.log('not found')
        return false
}


function sumIter(num){
        var ans = 0
        for (var i = num; i > 0; i--){
                ans += i
        }

        console.log(ans)
        
}


function factIter(num){
        var ans = 1
        for (var i = num; i > 0; i--){
                ans *= i
        }
        
        console.log(ans)
        
}


function factRecur(num){
        if (num == 1){
                return 1
        }
        else {
                return num * factRecur(num - 1)
        }
}               


function fibIter(num){
    var helper = [0 ,1]
    if (num == 0 || num == 1){
        console.log(num)
        return
    }
    else {
        for (var i = 1; i < num; i++){
            var temp = helper[0] + helper[1]
            helper[0] =  helper[1]
            helper[1] = temp
        }

    }

    console.log(helper[1])
}


function fibRecur(num){
    if (num == 0 || num == 1){
        return num
    }

    else {
        return fibRecur(num - 1) + fibRecur(num - 2)
    }
}

function rBS(arr, val, indices){
    var indicesToCheck = []

    if (indices){

        if (indices[0] > indices[1]){
            return false
        }
        else {

            //find the middle index of the indices param
            var middleIdx = Math.floor((indices[0] + indices[1]) / 2)
            var middleVal = arr[middleIdx]
            
            if (middleVal == val){
                return middleIdx
            }
            
            
            //search the right half of the indices param
            else if (val > middleVal){
                var newMiddle = middleIdx + 1
                indicesToCheck = [newMiddle, indices[1]]
                return rBS(arr, val, indicesToCheck)
            }

            else if (val < middleVal){
                var newMiddle = middleIdx - 1
                indicesToCheck = [indices[0], newMiddle]
                return rBS(arr, val, indicesToCheck)
            }
        }
    }
        
    else {
            //value of the entry at the middle of the list
            var middle = arr[arr.length / 2]
            console.log('middle value is ' , middle)
            if (middle == val){
                //return the middle index
                return arr.length / 2
            }
            //search the right half of the list
            else if (val > middle){
                indicesToCheck = [Math.floor(arr.length / 2) + 1, arr.length - 1]
                return rBS(arr, val, indicesToCheck)
            }

            //search the left half of the list
            else if (val < middle){
                indicesToCheck = [0, Math.floor(arr.length / 2) - 1]
                return rBS(arr, val, indicesToCheck)
            }
        }
}




