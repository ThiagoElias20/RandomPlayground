package Java;

import java.util.Scanner;

public class ex1165 {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int N = ler.nextInt();
        
        for (int i = 0; i < N; i++) {
            int X = ler.nextInt();
            int divisores = 0;
            
            for (int cont = 1; cont <= X; cont++) {
                if (X % cont == 0) {
                    divisores++;
                }
            }
            
            if (divisores == 2) {
                System.out.println(X + " eh primo");
            } else {
                System.out.println(X + " nao eh primo");
            }
        }
        
        ler.close();
    }
}