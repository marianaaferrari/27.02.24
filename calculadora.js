function calcular() { //Função: calcular que obtém dois números a partir de elementos HTML, realiza a adição e exibe o resultado.
     var num1 = document.getElementById("num1");// Obtém o elemento HTML referente ao primeiro número (num1)
     var num2 = document.getElementById("num2"); // Obtém o elemento HTML referente ao primeiro número (num2)
     let resultado = document.getElementById("resultado"); // Obtém o elemento HTML referente ao resultado da adição
     resultado.value = parseInt(num1.value) + parseInt(num2.value); // Atribui ao elemento resultado o valor resultante da adição dos números convertidos
 }