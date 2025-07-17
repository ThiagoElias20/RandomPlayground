package Java;

import java.util.Scanner;

public class ex1080 {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int maiorval = 0;
        int posicao = 1;
        int maiorpos = 0;
        for (int i = 5; i > 0; i--) {
            int N = ler.nextInt();
            if (N > maiorval) {
                maiorval = N;
                maiorpos = posicao;
            }
            posicao++;
        } 
        System.out.println(maiorval);
        System.out.println(maiorpos);
        ler.close();
    }
}