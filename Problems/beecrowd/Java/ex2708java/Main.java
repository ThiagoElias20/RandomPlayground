package Java.ex2708java;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner ler = new Scanner(System.in);

    Parque parq = new Parque(0, 0);
    
    while (true) {
      String voltasai = ler.next();

      if (voltasai.equals("ABEND")) {
        break;
      }

      int T = ler.nextInt();

      Jipe jipe = new Jipe(voltasai, T);

      parq.registrar(jipe);

    }

    System.out.println(parq.GetPessoas());
    System.out.println(parq.GetJipes());
    ler.close();
  }
}