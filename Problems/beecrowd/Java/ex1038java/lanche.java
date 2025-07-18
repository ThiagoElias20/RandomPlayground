package Java.ex1038java;

public class lanche {
    private int codigo;
    private int quantidade;
    private double [] conj = {0, 4.00, 4.50, 5.00, 2.00, 1.50};

    public lanche (int codigo, int quantidade) {
        this.codigo = codigo;
        this.quantidade = quantidade;
    }

    public double res() {
            return conj[this.codigo] * quantidade;
    }
}
