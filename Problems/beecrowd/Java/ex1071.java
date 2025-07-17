package Java;

import java.util.Scanner;

public class ex1071 {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int res = 0;

        int X = ler.nextInt();
        int Y = ler.nextInt();

        if (X > Y) {
            int temp = X;
            X = Y;
            Y = temp;
        }

        for (int i = X + 1; i < Y; i++) {
            if (i % 2 != 0) {
                res += i;
            }
        }

        System.out.println(res);

        ler.close();
    }
}