package Java.ex1009java;

import java.util.Scanner;

public class Main {
  public static void main (String[] args) {
    Scanner ler = new Scanner(System.in);
    String nome = ler.next();
    double salariofixo = ler.nextDouble();
    double todaldvendas = ler.nextDouble();

    vendedor vend = new vendedor(nome, salariofixo, todaldvendas);

    System.out.printf("TOTAL = R$ %.2f\n", vend.calc());

    ler.close();
  }
}