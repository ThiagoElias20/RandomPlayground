package Java;

import java.util.Scanner;

public class ex1066 {
 public static void main(String[] args) {
  Scanner ler = new Scanner(System.in);
  int valorespares = 0;
  int valoresimpares = 0;
  int valorespositivos = 0;
  int valoresnegativos = 0;

  for (int i = 0; i < 5; i++) {
      int N = ler.nextInt();
      if (N % 2 == 0) {
        valorespares++;
      }
      if (N % 2 != 0) {
        valoresimpares++;
      }
      if (N > 0) {
        valorespositivos++;
      }
      if (N < 0) {
        valoresnegativos++;
      }
    }
    System.out.println(valorespares + " valor(es) par(es)");
    System.out.println(valoresimpares + " valor(es) impar(es)");
    System.out.println(valorespositivos + " valor(es) positivo(s)");
    System.out.println(valoresnegativos + " valor(es) negativo(s)");
    ler.close();
  }
}