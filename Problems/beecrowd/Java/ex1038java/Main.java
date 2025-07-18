package Java.ex1038java;

import java.util.Scanner;

public class Main {
    public static void main (String[] args) {
        Scanner ler = new Scanner(System.in);
        int codigo = ler.nextInt();
        int quantidade = ler.nextInt();

        lanche lanc = new lanche(codigo, quantidade);

        System.out.printf("Total: R$ %.2f\n", lanc.res());

        ler.close();
    }
}
