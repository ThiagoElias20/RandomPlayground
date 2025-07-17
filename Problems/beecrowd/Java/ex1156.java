package Java;

public class ex1156 {
    public static void main (String[] args) {
        double S = 0;
        double abaixo = 1;
        for (int i = 1; i <= 39; i+=2) {
            S += i/abaixo;
            abaixo += abaixo;
        }
        System.out.printf("%.2f\n", S);
    }
}