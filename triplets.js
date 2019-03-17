function bSearch(num, arr, start, end){


    if (start > end || end < start){
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] == num){
        return mid;
    }

    if (arr[mid] > num){
        return bSearch(num, arr, start, mid - 1);
    }

    if (arr[mid] < num){
        return bSearch(num, arr, mid + 1, end);
    }

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

function removeDuplicates(arr){

    arr = mergeSort(arr);
    var ans = [];
    var i = 0;
    while (i < arr.length){
        if (arr[i] != ans[ans.length - 1]){
            ans.push(arr[i]);
        }
        i ++;
    }
    return ans;
}



var a = [1,3,5,7];
var b = [5,7,9];
var c = [7,9,11,13];



function triplets(a, b, c){
    a = removeDuplicates(a);
    b = removeDuplicates(b);
    c = removeDuplicates(c);

    console.log(a)
    console.log(b)
    console.log(c)

    var answer = 0;

    var idxA = 0;
    var idxC = 0;
    var i = 0;

    while (i < b.length){
        while (a[idxA] <= b[i]){
            if (b[i] < a[idxA]){
                i ++;
            }
                idxA ++
        }
        
        while (c[idxC] <= b[i]){
            if (b[i] < c[idxC]){
                i ++;
            }
            idxC ++
        }

        i ++;
        answer += (idxA * idxC);
    }


    console.log(answer)

}

triplets(a, b, c);
