package Java.ex2221java;

public class pomekon {
  private int ataque;
  private int defesa;
  private int level;
  private int bonus;

  public pomekon(int ataque, int defesa, int level, int bonus) {
    this.ataque = ataque;
    this.defesa = defesa;
    this.level = level;
    this.bonus = bonus;
  }

  public int calcValorGolpe() {
    int ValorGolpe = ((this.ataque + this.defesa) / 2) + this.bonus;
    if (level % 2 == 0) {
      ValorGolpe += bonus;
    }
    return ValorGolpe;
  }
}