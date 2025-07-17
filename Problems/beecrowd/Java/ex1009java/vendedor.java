package Java.ex1009java;

public class vendedor {
  private String nome;
  private double salariofixo;
  private double todaldvendas;

  //É um construtor, a diferença dele e de um setter é que o setter pode modificar a qualquer momento, ele não.
  public vendedor(String nome, double salariofixo, double todaldvendas) {
    this.nome = nome;
    this.salariofixo = salariofixo;
    this.todaldvendas = todaldvendas;
  }

  public String getnome() {
    return this.nome;
  }
  public double getsalariofixo() {
    return this.salariofixo;
  }
  public double gettodaldvendas() {
    return this.todaldvendas;
  }

// Isso são os setters
//   public void setnome(String nome) {
//     this.nome = nome;
//   }
//   public void setsalariofixo(double salariofixo) {
//     this.salariofixo = salariofixo;
//   }
//   public void settotaldvendas(double todaldvendas) {
//     this.todaldvendas = todaldvendas;
//   }

  public double calc() {
    return this.salariofixo + (this.todaldvendas * 0.15);
  }
}

