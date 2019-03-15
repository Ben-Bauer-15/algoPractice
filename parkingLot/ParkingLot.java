import java.util.ArrayList;
import java.util.List;

public class ParkingLot {
    private int numSpaces = 200;
    private int remainingSpaces = 200;

    List<Car> waitingLine = new ArrayList<>();
    List<Space> spaces = new ArrayList<>();

    public ParkingLot(){
        
        
    }

    public boolean isFull(){
        return this.remainingSpaces == 0;
    }


    public void incSpaces(){
        if (this.remainingSpaces < numSpaces){
            this.remainingSpaces ++;
        }
    }

    public void decSpaces(){
        if (this.remainingSpaces > 0){
            this.remainingSpaces --;
        }
    }

    public Space getSpace(){
        Space space = this.spaces.remove(this.spaces.size() - 1);
        return space;
    }

    public int getSpaces(){
        return this.remainingSpaces;
    }

    public void carEnter(Car car){
        if (isFull()){
            this.waitingLine.add(car);
        } else {
            car.enter(getSpace());
        }
    }

    public void carLeave(Car car, Space space){
        
    }

    public static void main(String[] args){

    }

}