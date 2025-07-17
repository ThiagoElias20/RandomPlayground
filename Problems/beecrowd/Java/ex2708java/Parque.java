package Java.ex2708java;

public class Parque {
    private int turistasNoParque;
    private int jipesNoParque;

    public Parque(int turistasNoParque, int jipesNoParque) {
        this.turistasNoParque = turistasNoParque;
        this.jipesNoParque = jipesNoParque;
    }

    public int GetPessoas(){
        return this.turistasNoParque;
    }
    
    public int GetJipes(){
        return this.jipesNoParque;
    }

    public void registrar(Jipe jipe) {
        if (jipe.getvoltasai().equals("SALIDA")) {
            turistasNoParque += jipe.getT();
            jipesNoParque++;
          } else if (jipe.getvoltasai().equals("VUELTA")) {
            turistasNoParque -= jipe.getT();
            jipesNoParque--;
          }
    }

}
