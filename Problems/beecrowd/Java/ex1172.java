package Java;

import java.util.Scanner;

public class ex1172 {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        
        int[] X = new int[10];
        
        for (int i = 0; i < X.length; i++) {
            X[i] = ler.nextInt();
            
            if (X[i] <= 0) {
                X[i] = 1;
            }
        }
        
        for (int i = 0; i < X.length; i++) {
            System.out.println("X[" + i + "] = " + X[i]);
        }
        
        ler.close();
    }
}
