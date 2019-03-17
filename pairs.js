function pairs(k , arr){
    var ints = {};
    for (var i = 0; i < arr.length; i++){
        ints[arr[i]] = true;

    }

    var answer = 0;
    
    for (i in ints){
        if (i + k in ints){
            answer ++;
        }
        if (i -k in ints){
            answer ++;
        }
    }

    console.log(answer);
    return answer;

}

var arr = [1,2,3,4]

pairs(1, arr)