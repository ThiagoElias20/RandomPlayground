// recebe como parametro a capaidade da mochila em kg e uma lista de N objetos, cada um com nome, peso e preço
//Algoritmo tem que imprimir os nomes dos objetos que são colocados na mochila, procurando maximizar o valor dentro da mochila
// sem ultrapassar a capacidade maxima

let lista1 = [
    {
        nome: 'cadeira',
        peso: 10,
        preco: 50
    },
    {
        nome: 'cadeira',
        peso: 10,
        preco: 50
    },
    {
        nome: 'cadeira',
        peso: 10,
        preco: 50
    },
    {
        nome: 'cadeira',
        peso: 10,
        preco: 50
    },
    {
        nome: 'cadeira',
        peso: 10,
        preco: 50
    },
];

let lista2 = [
    { nome: 'livro', peso: 1, preco: 15 },
    { nome: 'notebook', peso: 3, preco: 2000 },
    { nome: 'garrafa', peso: 2, preco: 40 },
    { nome: 'carregador', peso: 1, preco: 150 },
    { nome: 'fones', peso: 0.5, preco: 250 }
];

// a cada passo faz a melhor escolha atual sem pensar no futuro (algoritmo guloso)
function knapsack(capacidade, lista) {                                                                                           // comps   #vezes   #subtotal
    // ordena com preço por quilo em ordem descrescente para pegar sempre o mais valioso por kg                                      
    lista.sort((a, b) => (b.preco / b.peso) - (a.preco / a.peso));                                                               //   1      nlogn    nlogn

    let pesoAtual = 0;                                                                                                           //   0       1         0
    let valorTotal = 0;                                                                                                          //   0       1         0

    for (let i = 0; i < lista.length; i++) {                                                                                     //   1       n         n
        const item = lista[i];                                                                                                   //   0       n         0
        const valorPorKg = (item.preco / item.peso).toFixed(2);                                                                  //   0       n         0
                                                                                                                                   
        console.log(`Analisando item: ${item.nome} (Peso: ${item.peso} kg, Preço: R$${item.preco}, Valor/kg: ${valorPorKg})`);   //   0       n         0

        if (pesoAtual + item.peso <= capacidade) {                                                                               //   1       n         n
            pesoAtual += item.peso;                                                                                              //   0       ≤n        0
            valorTotal += item.preco;                                                                                            //   0       ≤n        0
            console.log(`Escolhido! Adicionado à mochila.`);                                                                     //   0       ≤n        0
        } else {
            console.log(`Ignorado! Não cabe na mochila (capacidade restante: ${capacidade - pesoAtual} kg).`);                   //   0       ≤n        0
        }

        console.log('---');                                                                                                      //   0       n         n
    }

    console.log('Peso total na mochila: ' + pesoAtual + ' kg');                                                                  //   0       1         0  
    console.log('Valor total na mochila: R$' + valorTotal);                                                                      //   0       1         0
}                                                                                                                     //TOTAL = nlogn + n + n + n = nlogn + 4n = O(N log N)                                               


knapsack(90, lista2);