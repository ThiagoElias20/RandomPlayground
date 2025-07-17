package Java;

import java.util.Scanner;

public class ex1060 {

    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int valoresPositivos = 0;

        for (int i = 0; i < 6; i++) {
            double valor = ler.nextDouble();
            if (valor > 0) {
                valoresPositivos++;
            }
        }

        System.out.println(valoresPositivos + " valores positivos");
        ler.close();
    }
}