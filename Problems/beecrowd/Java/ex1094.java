package Java;

import java.text.DecimalFormat;
import java.util.Scanner;

public class ex1094 {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int N = ler.nextInt();
        int R = 0;
        int S = 0;
        int C = 0;
        int totaldbixos = 0;

        for (int i = 0; i < N; i++) {
            int quantia = ler.nextInt();
            String tipo = ler.next(); // Use next() em vez de nextLine()
            totaldbixos += quantia;
            
            if (tipo.equals("R")) {
                R += quantia;
            } else if (tipo.equals("S")) {
                S += quantia;
            } else if (tipo.equals("C")) {
                C += quantia;
            }
        }
        
        
        DecimalFormat df = new DecimalFormat("#.00"); // Duas casas decimais
        double percentualC = ((double) C / totaldbixos) * 100;
        double percentualR = ((double) R / totaldbixos) * 100;
        double percentualS = ((double) S / totaldbixos) * 100;

        System.out.println("Total: " + totaldbixos + " cobaias");
        System.out.println("Total de coelhos: " + C);
        System.out.println("Total de ratos: " + R);
        System.out.println("Total de sapos: " + S);
        System.out.println("Percentual de coelhos: " + df.format(percentualC) + " %");
        System.out.println("Percentual de ratos: " + df.format(percentualR) + " %");
        System.out.println("Percentual de sapos: " + df.format(percentualS) + " %");
        ler.close();
    }
}