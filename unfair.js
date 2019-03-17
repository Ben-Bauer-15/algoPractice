function maxMin(k, arr){
    if (k > arr.length){
        return false;
    }

    arr = mergeSort(arr);

    if (k == arr.length){
        return arr[arr.length - 1] = arr[0];
    }

    var min = Number.MAX_SAFE_INTEGER;

    for (var i = 0; i < arr.length - k + 1; i++){
        var window = arr.slice(i, i + k);

        if (window[window.length - 1] - window[0] < min){
            min = window[window.length - 1] - window[0];
        }
        // console.log(window); 
    }
    console.log(min)
    return min;



    // console.log(arr)

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

var arr = [1,2,1,2,1]


maxMin(2, arr)