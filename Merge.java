public class Merge {

    public static int[] merge(int[] a, int[] b){
        a = shiftRight(a);
        int i = 0;
        int j = 0;
        int k = 0;

        while (a[i] == 0){
            i ++;
        }

        while (i < a.length && j < b.length){
            if (a[i] < b[j]){
                a[k] = a[i];
                i ++;
            } else {
                a[k] = b[j];
                j ++;
            }
            k ++;
        }
        if (i == a.length){
            while (j < b.length){
                a[k] = b[j];
                k ++;
                j ++;
            }
        }
        for (int l = 0; l < a.length; l++){
            System.out.println(a[l]);
        }

        return a;
    }

    public static int[] shiftRight(int[] a){
        int i = a.length - 1;
        while (a[i] == 0){
            i --;
        }
        int j = a.length - 1;

        while (i >= 0){
            a[j] = a[i];
            a[i] = 0;
            i --;
            j --;
        }
        return a;
    }
    public static void main(String[] args){
        int[] a = {10, 12, 13, 21, 30, 0, 0, 0, 0, 0};

        int[] b = {1, 3, 4, 5, 9};

        merge(a, b);
    }
}