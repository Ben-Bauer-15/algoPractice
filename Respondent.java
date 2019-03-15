public class Respondent extends Employee {
    Manager boss;
    Respondent next;

    CallCenter center;
    public Respondent(Manager m, CallCenter c){
        super(100);
        this.boss = m;
        this.next = null;
        this.center = c;
    }

    //overrides the employee hang up
    public void hangUp(){
        super.hangUp();

        //tell the call center to add me back to the queue!
        center.enterCallLine(this);

    }
    public static void main(String[] args){

    }
}