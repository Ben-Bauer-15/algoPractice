public class CallCenter {

    CallQueue q;


    public boolean dispatchCall(int exp){

        Respondent res = this.q.Dequeue();
        
        //no one is available to take the call
        if (res == null){
            return false;
        }

        //respondent is unable to handle the call
        if (res.exp < exp){

            //manager is unable to handle call or is unavailable
            if (res.boss.exp < exp || !res.boss.available){

                //director isn't available
                if (!res.boss.boss.available){
                    return false;
                }

                //director IS available
                res.boss.boss.available = false;
                return true;
            }


            //put the respondent back into the queue
            this.enterCallLine(res);

            //the manager handles the call
            res.boss.available = false;
            return true;
        }

        res.available = false;
        return true;

    }

    public void enterCallLine(Respondent res){
        this.q.Enqueue(res);
    }

    public CallCenter(){
        this.q = new CallQueue();
    }


    public static void main(String[] args){

    }
}