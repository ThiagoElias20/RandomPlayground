package Java;

import java.util.Scanner;

public class ex1173 {
  public static void main (String[] args) {
    Scanner ler = new Scanner(System.in);
    int[] N = new int[10];
    int Numer = ler.nextInt();
    for (int i = 0; i <= 9; i++) {
      N[i] = Numer;
      System.out.println("N[" + i + "] = " + Numer);
      Numer *= 2;
    }
    ler.close();

  }
}