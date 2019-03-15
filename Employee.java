public class Employee {
    int exp;
    boolean available;
    public Employee(int exp){
        this.exp = exp;
        this.available = true;
    }

    public boolean answerCall(int callExp){
        if (callExp > this.exp){
            return false;
        }
        if (!this.available){
            return false;
        }
        this.available = false;
        return true;
    }

    public void hangUp(){
        this.available = true;
    }

    
    public static void main(String[] args){

    }
}