
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var runner1 = l1
    var runner2 = l2
    var answer = new ListNode(0)
    var answerRunner = answer
    var carry = false

    while(runner1.next){
        var sum = runner1.val + runner2.val
        if (carry){
            sum++
        }
        if (sum >= 10){
            carry = true
        }
        else {
            carry = false
        }
        answerRunner.val = sum % 10
        answerRunner.next = new ListNode(0)
        answerRunner = answerRunner.next
        runner1 = runner1.next
        runner2 = runner2.next
    }

    var sum = runner1.val + runner2.val
    if (carry){
        sum++
    }
    answerRunner.val = sum % 10
    if (sum >= 10){
        answerRunner.next = new ListNode(1)
    }

    answerRunner.next = null
    return answer
  
};

var l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

var l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

var answer = addTwoNumbers(l1, l2)
var runner = answer
while (runner.next){
    console.log(runner.val)
    runner = runner.next
}
console.log(runner.val)