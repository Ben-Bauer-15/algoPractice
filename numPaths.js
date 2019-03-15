class treeNode {
    constructor(val){
        this.val = val;
        this.left = undefined;
        this.right = undefined;
    }
}


function inOrder(node){
    if (!node){
        return;
    }
    inOrder(node.left);
    console.log(node.val);
    inOrder(node.right)
}


var t1 = new treeNode(4)
t1.right = new treeNode(6)
t1.right.right = new treeNode(8)

t1.left = new treeNode(3)
t1.left.left = new treeNode(1)
t1.left.right = new treeNode(2)


var t2 = new treeNode(3)
t2.left = new treeNode(1)
t2.right = new treeNode(2)

function numPaths(root, sum){
    var right = [root.val];
    var left = right.slice();
    // console.log(right, left)

    var count = explorePaths(root.left, sum, left) + explorePaths(root.right, sum, right);
    
    return count;

}

function explorePaths(root, sum, arr){
    if (!root){
        return 0;
    }
    var count = 0;
    for (i in arr){
        arr[i] += root.val;
        if (arr[i] == sum){
            count ++;
        }
    }
    arr.push(root.val);
    var left = arr.slice();
    return count + explorePaths(root.left, sum, left) + explorePaths(root.right, sum, arr);
}

function checkSubtree(t1, t2){
    var l1 = inOrder(t1, []);
    var l2 = inOrder(t2, []);

    console.log(l1)
    console.log(l2)

    for (var i = 0; i <= l1.length - l2.length; i++){
        const sliced = l1.slice(i, i + l2.length);
        var hits = 0;
        for (var j = 0; j < l2.length; j++){
            if (sliced[j] != l2[j]){
                hits ++;
            }
        }
        if (hits == 0){
            console.log('true')
            return true;
        }
    }
    console.log('false')
    return false;
}

function inOrder(root, arr){
    if (!root){
        arr.push('X');
        return arr;
    }
    var left = inOrder(root.left, arr);
    left.push(root.val);
    var right = inOrder(root.right, []);
    for (i in right){
        left.push(right[i]);
    }
    return left;
}


checkSubtree(t1, t2)

