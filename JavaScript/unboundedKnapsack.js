let lista2 = [
    { nome: 'livro', peso: 1, preco: 15 },
    { nome: 'notebook', peso: 3, preco: 2000 },
    { nome: 'garrafa', peso: 2, preco: 40 },
    { nome: 'carregador', peso: 1, preco: 150 },
    { nome: 'fones', peso: 0.5, preco: 250 }
];

function unboundedKnapsack(capacidade, lista) {                      // comps   #vezes   #subtotal
    const dp = Array(capacidade + 1).fill(0);                         // 1        W        W
    const itemSelecionado = Array(capacidade + 1).fill(null);         // 1        W        W

    for (let w = 0; w <= capacidade; w++) {                           // W vezes
        for (let i = 0; i < lista.length; i++) {                      // n vezes
            const { nome, peso, preco } = lista[i];                   // 1        n*W      n*W
            if (peso <= w) {                                          // 1        n*W      n*W
                const novoValor = dp[w - peso] + preco;               // 1        n*W      n*W
                if (novoValor > dp[w]) {                              // 1        n*W      n*W
                    dp[w] = novoValor;                                // 1        n*W      n*W
                    itemSelecionado[w] = i;                           // 1        n*W      n*W
                }
            }
        }
    }                                                                 // Total: O(n * W)

    // reconstroe os itens escolhidos para melhor visualização
    const itensCarregados = [];                                       // 0        1        0
    let w = capacidade;                                               // 0        1        0
    while (w > 0 && itemSelecionado[w] !== null) {                    // 1        ≤W       ≤W
        const item = lista[itemSelecionado[w]];                       // 1        ≤W       ≤W
        itensCarregados.push(item);                                   // 0        ≤W       0
        w -= item.peso;                                               // 1        ≤W       ≤W
    }

    console.log("Valor total:", dp[capacidade]);                      // 0        1        0
    console.log("Itens carregados:", itensCarregados);                // 0        1        0
    return { valorTotal: dp[capacidade], itensCarregados };           // 1        1        1
}

unboundedKnapsack(9000, lista2);