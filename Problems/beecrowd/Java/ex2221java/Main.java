package Java.ex2221java;

import java.util.Scanner;
public class Main {
  public static void main (String[] args) {
    Scanner ler = new Scanner(System.in);
    int T = ler.nextInt();

    for (int i = T; i > 0; i--) {
      int bonus = ler.nextInt();

      int AtaqueDabriel = ler.nextInt();
      int DefesaDabriel = ler.nextInt();
      int LevelDabriel = ler.nextInt();

      int AtaqueGuarte = ler.nextInt();
      int DefesaGuarte = ler.nextInt();
      int LevelGuarte = ler.nextInt();

      pomekon pomekonDabriel = new pomekon(AtaqueDabriel, DefesaDabriel, LevelDabriel, bonus);
      pomekon pomekonGuarte = new pomekon(AtaqueGuarte, DefesaGuarte, LevelGuarte, bonus);

      int valorGolpeDabriel = pomekonDabriel.calcValorGolpe();
      int valorGolpeGuarte = pomekonGuarte.calcValorGolpe();

      if (valorGolpeDabriel > valorGolpeGuarte) {
         System.out.println("Dabriel");
      } else if (valorGolpeGuarte > valorGolpeDabriel) {
         System.out.println("Guarte");
      } else {
         System.out.println("Empate");
      }

    }
    ler.close();
  }
}