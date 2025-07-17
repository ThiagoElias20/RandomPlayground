package Java;

import java.util.Scanner;

public class ex1153 {
    public static void main (String[] args) {
        Scanner ler = new Scanner(System.in);
        int N = ler.nextInt();
        int fatorial = 1;
        for (int i = 1; i <= N; i++) {
            fatorial = fatorial * i;
        }
        System.out.println(fatorial);
        ler.close();
    }
}
