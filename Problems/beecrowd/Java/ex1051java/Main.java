package Java.ex1051java;

import java.util.Scanner;

public class Main {
  public static void main (String[] args) {
    Scanner ler = new Scanner(System.in);
    pessoa habitante = new pessoa();
    habitante.setSalario(ler.nextDouble());
    habitante.Imposto();
    double imposto = habitante.Imposto();
    if (imposto == 0) {
      System.out.println("Isento");
    } else {
      System.out.printf("R$ %.2f%n", habitante.getImposto());
    }

    ler.close();
  }
}

/*
 Saída: Valor total do Imposto de renda
 Infos: 
 -Valor de salário de uma pessoa (ENTRADA)
 -Calcular valor de imposto segundo tabela
 A quem pertence essas info:
 -Pessoa

 OQuE eu fiz:

 Fiz procedural, depois traduzi, na main ficou pouco
 get e set na pessoa, criei as info e depois utilizei mesmo calculo
 Na main eu sou repassei tudo na ordem
 CRIEI A PESSOA
 LI A INFORMAçÃO USANDO GET
 CALCULEI O IMPOSTO
 PRINTEI A RESPOSTA
 */
