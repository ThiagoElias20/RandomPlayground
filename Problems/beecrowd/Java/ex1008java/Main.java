package Java.ex1008java;

import java.util.Scanner;

public class Main {
    public static void main (String[] args) {
        Scanner ler = new Scanner(System.in);
        int n = ler.nextInt();
        int recebehora = ler.nextInt();
        double salario = ler.nextDouble();

        funcionario func = new funcionario(n, recebehora, salario);

        System.out.printf("NUMBER = %d\n", func.getNumero());
        System.out.printf("SALARY = U$ %.2f\n", func.calc());

        ler.close();
    }
}
