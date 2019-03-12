const Node = require('./node').Node;

module.exports = {

    SLL : class SLL {
        constructor(){
            this.head = undefined;
        }
    
        append(val){
            var newNode = new Node(val);
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
            var node = new Node(val);
            node.next = this.head;
            this.head = node;
            return this
        }
    }
}


function sumListsBackward(L1, L2){
    var answer = new SLL();
    var R1 = L1.head;
    var R2 = L2.head;
    var carry = 0;
    while (R1 && R2){
        const sum = R1.val + R2.val + carry;
        answer.append(sum % 10);
        carry = Math.round(sum / 10);
        R1 = R1.next;
        R2 = R2.next;
    }
    if (!R1 && R2){
        while (R2){
            answer.append(R2.val);
            R2 = R2.next;
        }
    }
    else if (!R2 && R1){
        while (R1){
            answer.append(R1.val);
            R1 = R1.next;
        }
    }
    answer.printList()
    return answer
}

function _sumListsFwd(n1, n2, answer){
    var sum = 0;
    if (!n1.next && !n2.next){
        sum = n1.val + n2.val;
    } else {
        const carry = _sumListsFwd(n1.next, n2.next, answer);
        // console.log(carry)
        sum = n1.val + n2.val + carry;
    }
    answer.updateHead(sum % 10);
    return Math.floor(sum / 10);
}

function sumListsFwd(l1, l2){
    var answer = new SLL();
    var r1 = l1.head;
    var r2 = l2.head;
    var size1 = 0;
    var size2 = 0;
    while (r1){
        size1 ++;
        r1 = r1.next;
    }
    while (r2){
        size2 ++;
        r2 = r2.next;
    }
    if (size1 > size2){
        for (var i = 0; i < size1 - size2; i++){
            l2.updateHead(0)
        }
    }
    else if (size2 > size1){
        for (var i = 0; i < size2 - size1; i++){
            l1.updateHead(0)
        }
    }
    _sumListsFwd(l1.head, l2.head, answer);
    answer.printList()
    return answer
}


function isIntersection(l1, l2){
    var r1 = l1.head;
    var r2 = l2.head;

    var size1 = 0, size2 = 0;

    while (r1.next){
        r1 = r1.next;
        size1 ++;
    }
    while (r2.next){
        r2 = r2.next;
        size2 ++;
    }
    if (!r1 == r2){
        return false;
    }
    r1 = l1.head;
    r2 = l2.head;

    if (size1 > size2){
        for (var i = 0; i < size1 - size2; i++){
            r1 = r1.next;
        }
    }
    
    else if (size2 > size1){
        for (var i = 0; i < size2 - size1; i++){
            r2 = r2.next;
        }
    }
    while (r1 != r2){
        r1 = r1.next;
        r2 = r2.next;
    }
    return r1;
}


var l1 = new SLL();
l1.append('a').append('b').append('b').append('a')


function isPal(l){
    var size = 0;
    var r = l.head;
    while (r){
        size ++;
        r = r.next;
    }
    var stack = [];
    r = l.head;
    for (var i = 0; i < Math.floor(size / 2); i++){
        stack.push(r.val);
        r = r.next;
    }
    if (size % 2 != 0){
        r = r.next;
    }
    while (r){
        const last = stack.pop();
        if (last != r.val){
            return false;
        }
        r = r.next;
    }

    return true;

}

console.log(isPal(l1))



