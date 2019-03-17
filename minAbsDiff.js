function minimumAbsoluteDifference(arr){

    if (arr.length == 0 || arr.length == 1){
        return 0;
    }

    var diff = Number.MAX_SAFE_INTEGER;
    arr = mergeSort(arr);


    for (var i = 0; i < arr.length - 1; i++){
        var pair = [arr[i], arr[i + 1]];

        if (pair[1] - pair[0] < diff){
            diff = pair[1] - pair[0];
        }
    }

    return diff;
}

function mergeSort(arr){
    if (arr.length == 0){
        return [];
    }
    if (arr.length == 1){
        return arr;
    }

    var left = arr.slice(0, Math.floor(arr.length / 2));
    var sortedLeft = mergeSort(left);

    var right = arr.slice(Math.floor(arr.length / 2), arr.length);
    var sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);

}

function merge(arr1, arr2){
    var ans = [];

    var i = 0;
    var j = 0;

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            ans.push(arr1[i]);{
                i ++;
            }
        } else if (arr1[i] > arr2[j]){
            ans.push(arr2[j]);
            j ++;
        } else {
            ans.push(arr2[j]);
            ans.push(arr1[i]);
            i ++;
            j ++;
        }
    }

    if (i < arr1.length){
        while (i < arr1.length){
            ans.push(arr1[i]);
            i ++;
        }
    }

    else if (j < arr2.length){
        while (j < arr2.length){
            ans.push(arr2[j]);
            j ++;
        }
    }
    return ans;
}


var arr = [3, -7, 0];


minimumAbsoluteDifference(arr)
