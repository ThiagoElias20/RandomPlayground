package Java;

import java.util.Scanner;

public class ex1151 {
    public static void main (String[] args) {
        Scanner ler = new Scanner(System.in);
        int N = ler.nextInt();
        int[] fibo;
        fibo = new int[N];
        String saida = "";
        for (int i = 0; i < N ; i++) {
            fibo[0] = 0;
            fibo[1] = 1;
            if (i > 1) {
                fibo[i] = fibo[i - 1] + fibo[i - 2];
            }
            if (i < N - 1) {
                saida += fibo[i] + " ";
            } else {
                saida += fibo[i];
            }
        }
        System.out.println(saida);

        ler.close();
    }
}
