package Java;
import java.util.Scanner;

public class ex1001 {
    public static void main (String[] args) {
        Scanner ler = new Scanner(System.in);
        int a = ler.nextInt();
        int b = ler.nextInt();
        System.out.printf("X = ", a + b);
        ler.close();
    }
}
