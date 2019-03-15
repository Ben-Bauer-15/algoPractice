public class CallQueue {
    Respondent first;
    Respondent last;

    public CallQueue(){
        this.first = null;
        this.last = null;
    }

    public void Enqueue(Respondent res){
        if (this.first == null && this.last == null){
            this.first = res;
            this.last = res;
        } else {
            this.last.next = res;
            this.last = res;
        }

    }

    public Respondent Dequeue(){
        if (this.first == null){
            return false;
        }

        Respondent res = this.first;

        if (this.first == this.last){
            this.first = null;
            this.last = null;
            return res;
        }

        this.first = res.next;

        return res;

    }

    public static void main(String[] args){

    }
}