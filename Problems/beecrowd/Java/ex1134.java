package Java;

import java.util.Scanner;

public class ex1134 {
    public static void main (String[] args) {
        Scanner ler = new Scanner(System.in);
        int entrada = ler.nextInt();
        int alcool = 0;
        int gasolina = 0;
        int diesel = 0;
        while (entrada != 4) {
            if (entrada == 1) {
                alcool++;
                entrada = ler.nextInt();
            } else if (entrada == 2) {
                gasolina++;
                entrada = ler.nextInt();
            } else if (entrada == 3) {
                diesel++;
                entrada = ler.nextInt();
            } else {
                entrada = ler.nextInt();
            }
        }
        System.out.println("MUITO OBRIGADO");
        System.out.println("Alcool: " + alcool);
        System.out.println("Gasolina: " + gasolina);
        System.out.println("Diesel: " + diesel);
        ler.close();
    }
}