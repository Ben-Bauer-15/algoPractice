class treeNode {
    constructor(val){
        this.val = val;
        this.left = undefined;
        this.right = undefined;
    }
}



function makeBST(arr){
    if (arr.length == 0){
        return;
    }
    const middle = Math.floor(arr.length / 2);
    var node = new treeNode(arr[middle]);
    node.left = makeBST(arr.slice(0, middle));
    node.right = makeBST(arr.slice(middle + 1, arr.length));
    return node;
}

// var arr = [0,1,2,5,6,8,9,12]

// var root = makeBST(arr)

function ancestor(n1, n2, root){
    if (!root){
        return false;
    }
    if (root == n1 || root == n2){
        return true;
    }
    var left = ancestor(n1, n2, root.left);
    var right = ancestor(n1, n2, root.right);

    
    if (typeof left == 'boolean' && typeof right == 'boolean'){
        if (!left && !right){
            return false;
        }
        if (left && right){
            return root;
        }
        if (left || right){
            return true;
        }
    }
    if (typeof left == 'object'){
        return left;
    }
    if (typeof right == 'object'){
        return right;
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

var root = new treeNode(16)
root.left = new treeNode(10)
root.left.right = new treeNode(14)
root.left.left = new treeNode(5)
root.left.left.right = new treeNode(12)

root.right = new treeNode(20)
root.right.right = new treeNode(22)
root.right.left = new treeNode(18)
root.right.left.left = new treeNode(15)
root.right.right.right = new treeNode(24)


