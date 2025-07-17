package Java;

import java.util.Scanner;

public class ex1154 {
    public static void main (String[] args) {
        Scanner ler = new Scanner(System.in);
        int cont = 0;
        int soma = 0;
        int N = ler.nextInt();

        for (int i = N; i >= 0; cont++) {
            soma += i;
            i = ler.nextInt();
        }
        System.out.printf("%.2f\n", (double) soma/cont);
        ler.close();
    }
}
