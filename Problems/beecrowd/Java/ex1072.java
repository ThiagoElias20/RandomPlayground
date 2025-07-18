package Java;

import java.util.Scanner;

public class ex1072 {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int N = ler.nextInt();
        int in = 0;
        int out = 0;
        for (int i = N; i > 0; i--) {
            int X = ler.nextInt();
            if (X <= 20 && X >= 10) {
                in++;
            } else {
                out++;
            }
        }
        System.out.println(in + " in");
        System.out.println(out + " out");
        ler.close();
    }
}