package Java;

import java.util.Scanner;

public class ex1065 {
 public static void main(String[] args) {
  Scanner ler = new Scanner(System.in);
  int valorespares = 0;
  for (int i = 0; i < 5; i++) {
      int N = ler.nextInt();
      if (N % 2 == 0) {
        valorespares++;
      }
    }
    System.out.println(valorespares + " valores pares");
    ler.close();
  }
}