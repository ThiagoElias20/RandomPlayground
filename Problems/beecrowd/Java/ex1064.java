package Java;

import java.text.DecimalFormat;
import java.util.Scanner;

public class ex1064 {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int valoresPositivos = 0;
        double soma = 0;

        for (int i = 0; i < 6; i++) {
            double valor = ler.nextDouble();
            if (valor > 0) {
                valoresPositivos++;
                soma += valor;
            }
        }

        System.out.println(valoresPositivos + " valores positivos");

            double media = (double) soma / valoresPositivos;
            DecimalFormat df = new DecimalFormat("#.0");
            System.out.println(df.format(media));

        ler.close();
    }
}