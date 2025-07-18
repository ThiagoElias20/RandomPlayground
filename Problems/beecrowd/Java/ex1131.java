package Java;

import java.util.Scanner;

public class ex1131 {
    public static void main (String[] args) {
        Scanner ler = new Scanner(System.in);
        int vitoriasInt = 0;
        int vitoriasGrem = 0;
        int empates = 0;
        int inter = ler.nextInt();
        int gremio = ler.nextInt();
        int quantgrenais = 1;
        if (gremio > inter) {
            vitoriasGrem++;
        } else if (inter > gremio) {
            vitoriasInt++;
        } else {
            empates++;
        }
        System.out.println("Novo grenal (1-sim 2-nao)");
        int novogrenal = ler.nextInt();
            while (novogrenal == 1) {
                inter = ler.nextInt();
                gremio = ler.nextInt();
                if (gremio > inter) {
                    vitoriasGrem++;
                } else if (inter > gremio) {
                    vitoriasInt++;
                } else {
                    empates++;
                }
                quantgrenais++;
                System.out.println("Novo grenal (1-sim 2-nao)");
                novogrenal = ler.nextInt();
            }
            if (novogrenal != 1) {
                System.out.println(quantgrenais + " grenais");
                System.out.println("Inter:" + vitoriasInt);
                System.out.println("Gremio:" + vitoriasGrem);
                System.out.println("Empates:" + empates);
                if (vitoriasInt > vitoriasGrem) {
                    System.out.println("Inter venceu mais");
                } else if (vitoriasGrem > vitoriasInt) {
                    System.out.println("Gremio venceu mais");
                } else {
                    System.out.println("Nao houve vencedor");
                }

            }
        ler.close();
    }
}