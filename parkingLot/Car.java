public class Car {
    private boolean paid = false;
    boolean hasTicket = false;


    public Car(String make, String model, String plate, Owner owner){
        this.plateNumber = plate;
        this.make = make;
        this.model = model;
        this.owner = owner;
    }

    public void enter(Space space){
        this.paid = this.owner.pay(space.price);
        space.changeOccupiedStatus();
        space.carEnter(this);

    }

    public boolean didCarPay(){
        return this.paid;
    }

    public void leave(Space space){
        space.changeOccupiedStatus();
        space.carLeave();
        this.paid = false;
        this.hasTicket = false;
    }



}