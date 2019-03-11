function rotateMatrix(arr){

    for (i in arr){
        console.log(arr[i])
    }

    console.log('**********')
    var visited = [];
    for (k in arr){
        visited.push([])
        for (l in arr){
            visited[visited.length - 1].push(false);
        }
    }

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            var row = i;
            var col = j;
            if (visited[i][j]){
                continue;
            }
            var curr = arr[row][col];
            while (!visited[row][col]){
                const next = arr[col][arr.length - 1 - row];
                arr[col][arr.length - 1 -row] = curr;
                curr = next;
                visited[row][col] = true;
                temp = row;
                row = col;
                col = arr.length - 1 - temp
            }
        }
    }

    for (i in arr){
        console.log(arr[i])
    }
    
}


var arr = [
            [4,8,2,6],
            [7,3,6,2],
            [9,5,2,1],
            [0,3,8,2]
        ]


rotateMatrix(arr)

