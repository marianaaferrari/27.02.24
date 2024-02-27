const sortear = () => {
    let nomes = ["Lorrainy, ", "Giovani, ", "Gabriel, ", "Calebe, ", "Jheniffer, ", "Dudinha, "]; //entre aspas duplas é string; "nome" é um parâmetro;
    
    let h1Nome = document.getElementById("nome"); //let é p sumir da memória dps que terminar a função; document. é método;

    let achouNumero = false; //"=" operador de atribuição;
    let numeroSorteado; //traduzindo: declaração da variável "numeroSorteado";

    while (achouNumero == false) { //while é uma esrutura de repetição, sempre que ele aparece acontece uma repetição; "==" é operador de comparação;
        numeroSorteado = Math.floor(Math.random() * 100); //Math.floor: arredondar; * é um operador matematico de multiplicação; math.floor: arredonda valores p o numero menor mais proximo; math.randow: gera um nyumero aleatório; parenteses é parametro, como se fosse uma capsula que contém algo dentro
        if (numeroSorteado < nomes.length) {
            achouNumero = true; //Verifica se o número sorteado é menor que o comprimento da matriz de nomes e, se for, define achouNumero como true, encerrando o loop
        }
    }

    switch (numeroSorteado) { //SWITCH é trocar; SWITCH CASE é tipo um interruptor;
        case 0: //CASE é TROCAR caso a variavel seja 0;
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 2:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:
        //Define diferentes casos para cada número sorteado de 0 a 5. Em cada caso, o nome correspondente é exibido no elemento h1Nome
            h1Nome.innerText = nomes[numeroSorteado];
            break; // break serve p sair do loop atual, encerra o que o switch começou;
        default: //caso não tenha nenhum nome listado acima;
            h1Nome.innerText = "ops! nome não consta na lista";
    }
    h1Nome.innerText += " o número sorteado foi: " + numeroSorteado; //h1Nome é a variavel; += recebe a propria variavel mais aquilo que eu queira que apareça;


}