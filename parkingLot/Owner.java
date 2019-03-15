public class Owner {

    public Owner(String name, int money){
        this.name = name;
        this.moneyOnHand = money;
    }

    public boolean pay(int amount){
        if (amount - this.moneyOnHand > 0){
            this.moneyOnHand -= amount;
            return true;
        }
        return false;
    }

    public static void main(String[] args) {
        
    }


}