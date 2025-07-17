package Java.ex1051java;

public class pessoa {
  private double salario;
  private double imposto;

  public double getSalario() {
    return salario;
  }
  public void setSalario(double salario) {
    this.salario = salario;
  }
  public double getImposto() {
    return imposto;
  }
  public void setImposto(double imposto) {
    this.imposto = imposto;
  }

  public double Imposto() {
    if (salario >= 0 && salario <= 2000.00) {
      return this.imposto = 0;
    } else if (salario >= 2000.01 && salario <= 3000.00) {
      return this.imposto = (salario - 2000) * 0.08;
    } else if (salario >= 3000.01 && salario <= 4500.00) {
      return this.imposto = (salario - 3000) * 0.18 + 80;
    } else if (salario >= 4500) {
      return this.imposto = (salario - 4500) * 0.28 + 350;
    }
    return 0;
  }
}
