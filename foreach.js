var tempoFilme = 60; //Define a duração total do filme em segundos como 60
var inicioFilme = 0; //Define uma variável para acompanhar o tempo decorrido do filme, inicializada como 0

for (var t = 0; t < tempoFilme; t++) { //Inicia um loop que itera de 0 até o tempo total do filme (excluindo)
    setTimeout(function() { //A cada iteração do loop, define uma função para ser executada após um certo intervalo de tempo, onde t é o número de segundos decorridos até o momento atual do loop, multiplicado por 1000 para converter para milissegundos (1 segundo = 1000 milissegundos).
        console.clear(); //Limpa o console para remover mensagens anteriores
        console.log("Assistindo filme 60 segundos... Ainda faltam [" + (tempoFilme - inicioFilme) + "] segundos."); //
        inicioFilme++; //Imprime uma mensagem no console indicando que o filme está sendo assistido e quantos segundos restam para o final do filme, onde (tempoFilme - inicioFilme) calcula quantos segundos ainda restam
    },t*1000); //Incrementa a variável inicioFilme para acompanhar o progresso do filme
}
