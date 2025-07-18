package Java.ex1049java;

public class Animal {
    private String descricao;
    private String alimentacao;

    public Animal(String descricao, String alimentacao) {
        this.descricao = descricao;
        this.alimentacao = alimentacao;
    }
    public String getDescricao() {
        return descricao;
    }

    public String getAlimentacao() {
        return alimentacao;
    }
}

/*
 * Ave("carnivoro")
 * Mamifero("onívoro")
 * Uma classe com só Get e Set não ta errada!
 */
