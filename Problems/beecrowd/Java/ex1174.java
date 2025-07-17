package Java;

import java.util.Scanner;

public class ex1174 {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        double[] N = new double[100];

        for (int i = 0; i < 100; i++) {
            if (ler.hasNextDouble()) { // Verifica se há mais entrada disponível
                double Numer = ler.nextDouble();
                N[i] = Numer;
                if (Numer <= 10) {
                    System.out.printf("A[%d] = %.1f%n", i, Numer);
                }
            } else {
                break;
            }
        }

        ler.close();
    }
}
