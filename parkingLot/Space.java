public class Space {

    //denotes 120 minutes
    private int maxTime = 120;
    private int remainingTime = 120;

    int price = 20;

    private Car car = null;
    private boolean occupied = false;

    private ParkingLot lot;


    public Space(int ID, ParkingLot lot){
        this.ID = ID;
        this.lot = lot;
    }

    public boolean isOccupied(){
        return this.occupied;
    }

    public void carEnter(Car car){
        this.car = car;
        this.lot.decSpaces();
    }

    public void carLeave(){
        this.car = null;
        this.lot.incSpaces();
        this.resetTime();
    }

    public void changeOccupiedStatus(){
        this.occupied = !this.occupied;
    }

    public void decrementTime(int time){
        this.remainingTime -= time;
        if (this.remainingTime < 0 && !this.car.hasTicket){
            this.car.hasTicket = true;
            this.writeTicket();
        }
    }

    public void resetTime(){
        this.remainingTime = this.maxTime;
    }

    public void writeTicket(){

    }


}