class listNode {
    constructor(val){
        this.val = val;
        this.next = undefined;
    }
}

class SLL {
    constructor(){
        this.head = undefined;
    }

    append(val){
        var newNode = new listNode(val);
        if (!this.head){
            this.head = newNode;
            return this;
        }
        var runner = this.head;
        while (runner.next){
            runner = runner.next;
        }
        runner.next = newNode;
        return this;
    }

    printList(){
        if (!this.head){
            console.log("List is empty");
            return this;
        }
        var runner = this.head;
        while (runner.next){
            console.log(runner.val);
            runner = runner.next;
        }
        console.log(runner.val);
        return this;
    }

    removeDups(){
        var set = {};
        if (!this.head){
            return false;
        }
        var prev = undefined;
        var curr = this.head;
        while (curr){
            if (curr.val in set){
                prev.next = curr.next;
            }
            else {
                set[curr.val] = 1;
                prev = curr;
            }
            curr = curr.next
        }
        return this
    }

    kToLast(k){
        var size = 0;
        var runner = this.head;
        while (runner){
            size ++;
            runner = runner.next;
        }
        if (k > size || k < 1){
            return false;
        }
        var position = 0;
        runner = this.head;
        while (position < size - k){
            position ++;
            runner = runner.next
        }
        return runner;
    }

    partition(x){
        var L1 = new SLL();
        var L2 = new SLL();
        var runner = this.head;
        while (runner){
            if (runner.val < x){
                L1.append(runner.val);
            }
            else {
                L2.append(runner.val);
            }
            runner = runner.next;
        }
        runner = L1.head;
        while (runner.next){
            runner = runner.next;
        }
        runner.next = L2.head;
        L1.printList()
        return L1
    }

    updateHead(val){
        var node = new listNode(val);
        node.next = this.head;
        this.head = node;
        return this
    }
}

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

function inOrder(node){
    if (!node){
        return;
    }
    inOrder(node.left);
    console.log(node.val);
    inOrder(node.right)
}

function depthLists(node, depth, list){
    if (!node){
        return;
    }
    if (!list[depth]){
        var sList = new SLL();
        list.push(sList);
        sList.append(node.val);
    } else {
        list[depth].append(node.val);
    }
    depthLists(node.left, depth + 1, list);
    depthLists(node.right, depth + 1, list);
    return list;
}



var arr = [0,1,2,5,6,8,9,12]

var root = makeBST(arr)

root.left.right.val = 7



function checkHeight(node){
    
    if (!node){
        return 0;
    }
    var left = checkHeight(node.left);
    if (left == Number.MIN_VALUE){
        return Number.MIN_VALUE;
    }
    
    var right = checkHeight(node.right)
    if (right == Number.MIN_VALUE){
        return Number.MIN_VALUE;
    }
    
    if (Math.abs(left - right) > 1){
        return Number.MIN_VALUE;
    }

    return Math.max(left, right) + 1;
}


function isBalanced(node){
    return checkHeight(node) != Number.MIN_VALUE;
}



function validateBST(node){
    var sorted = [];
    inOrder(node, sorted);
    for (var i = 1; i < sorted.length; i++){
        if (sorted[i] < sorted[i - 1]){
            return false;
        }
    }
    return true;
}

function inOrder(node, arr){
    if (!node){
        return;
    }
    inOrder(node.left, arr);
    arr.push(node.val);
    inOrder(node.right, arr);
    return arr;
}

console.log(validateBST(root))

