package Java.ex1008java;

public class funcionario {
    private int n;
    private int recebehora;
    private double salario;

    public funcionario(int n, int recebehora, double salario){
        this.n = n;
        this.recebehora = recebehora;
        this.salario = salario;
    }

    public int getNumero() {
            return this.n;
    }
    public int getRecebeHora() {
            return this.recebehora;
    }
    public double getSalario() {
            return this.salario;
    }
    
    // Setters
    // public void setNumero(int n) {
    //     this.n = n;
    // }
    // public void setRecebeHora(int recebehora) {
    //     this.recebehora = recebehora;
    // }
    // public void setSalario(double salario) {
    //     this.salario = salario;
    //}

    public double calc() {
        return this.recebehora * this.salario;
    }
}
