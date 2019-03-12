class Elem {
    constructor(val, min){
        this.next = undefined;
        this.val = val;
        this.min = min;
    }
}

class Stack {
    constructor(){
        this.top = undefined;
        this.min = undefined;
    }

    push(val){
        var elem = new Elem(val);
        if (!this.top){
            this.top = elem;
            this.min = elem.val;
            elem.min = this.min
            return this
        }
        elem.next = this.top;
        this.top = elem;
        if (this.min > elem.val){
            this.min = elem.val;
        }

        elem.min = this.min
        return this
    }
    
    pop(){

        var elem = this.top;
        this.top = elem.next;
        // this.min = this.top.min;
        return elem.val
    }

    printMin(){
        return this.top.min
    }

    printStack(){
        var r = this.top;
        while (r){
            console.log(r.val)
            r = r.next;
        }
    }

    isEmpty(){
        return this.top == undefined;
    }

    sort(){
        var s2 = new Stack();
        var temp;
        while (!this.isEmpty()){
            temp = this.pop();
            if (s2.isEmpty()){
                s2.push(temp);
                continue;
            }
            var runner = s2.top, depth = 0;
            while (runner && runner.val >= temp){
                runner = runner.next;
                this.push(s2.pop());
                depth ++;
            }
            s2.push(temp);
            for (var i = 0; i < depth; i++){
                s2.push(this.pop());
            }
        }
        while (!s2.isEmpty()){
            this.push(s2.pop());
        }
        this.printStack();
        return this;
    }
}

var s = new Stack()

s.push(4).push(12).push(6).push(15).push(10).push(20).push(-1)

s.sort();